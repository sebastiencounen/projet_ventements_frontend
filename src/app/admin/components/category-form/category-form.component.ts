import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesServerService} from '../../../categories/repositories/categories-server.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  catForm: FormGroup = this.fb.group({
    title: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private categoriesService: CategoriesServerService) {}

  ngOnInit(): void {
  }

  submit() {
    this.categoriesService
      .addCategory(this.catForm.value)
      .subscribe(cat => console.log(cat), err => console.log(err));
  }
}
