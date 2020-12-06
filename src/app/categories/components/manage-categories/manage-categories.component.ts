import { Component, OnInit } from '@angular/core';
import {Categories} from '../../types/category';
import {CategoriesServerService} from '../../repositories/categories-server.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {

  categories: Categories = [];

  constructor(private categoriesService: CategoriesServerService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.categoriesService.query().subscribe(
      categories => this.categories = categories
      // categories => console.log(categories)
    );
  }
}
