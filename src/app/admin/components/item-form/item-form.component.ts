import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Categories} from '../../../categories/types/category';
import {CategoriesServerService} from '../../../categories/repositories/categories-server.service';
import {ItemsServerService} from '../../../items/repositories/items-server.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  categories: Categories = [];
  hostedImageUrl: string;

  itemForm: FormGroup = this.fb.group({
    categoryId: ['', Validators.required],
    label: ['', Validators.required],
    price: ['', Validators.required],
    imageItem: ['' , Validators.required],
    descriptionItem: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private categoryService: CategoriesServerService,
              private itemsService: ItemsServerService
  ) {}

  ngOnInit(): void {
    // Query categories
    this.categoryService
      .query()
      .subscribe(
        categories =>
          this.categories =
            categories.reduce(
              (p, c, i, a) => [...p, ...c.subCategories], []),
        err => console.log(err)
      );
  }

  submit(): void {
    this.itemsService
      .addItem(this.itemForm.value["categoryId"], this.itemForm.value)
      .subscribe(
        item => console.log(item),
        err => console.log(err)
      );
  }

  onImageUploaded(imageUrl: string) {
    this.hostedImageUrl = imageUrl;
    this.itemForm.patchValue({ imageItem: this.hostedImageUrl });
  }
}
