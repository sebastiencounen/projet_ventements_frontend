import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesServerService} from '../../../categories/repositories/categories-server.service';
import {Categories} from '../../../categories/types/category';

@Component({
  selector: 'app-sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.scss']
})
export class SubCategoryFormComponent implements OnInit {

  categories: Categories = [];

  subCatForm: FormGroup = this.fb.group({
    categoryId: ['', Validators.required],
    title: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private categoriesService: CategoriesServerService) {}

  ngOnInit(): void {
    this.categoriesService
      .query()
      .subscribe(cat => this.categories = cat, err => console.log(err));
  }

  submit() {
    this.categoriesService
      .addSubcategory(this.subCatForm.value['categoryId'], this.subCatForm.value)
      .subscribe(sub => this.subCatForm.reset(), err => console.log(err));
  }
}
