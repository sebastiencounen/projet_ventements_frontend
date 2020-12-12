import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Categories} from '../../../categories/types/category';
import {CategoriesServerService} from '../../../categories/repositories/categories-server.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  categories: Categories = [];

  itemForm: FormGroup = this.fb.group({
    categoryId: ['', Validators.required],
    label: ['', Validators.required],
    price: ['', Validators.required],
    imageItem: ['', Validators.required],
    descriptionItem: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private categoryService: CategoriesServerService
  ) {}

  ngOnInit(): void {
    // Query categories
    this.categoryService
      .query()
      .subscribe(
        categories => this.categories = categories,
        err => console.log(err)
      );
  }

  submit(): void {

  }
}
