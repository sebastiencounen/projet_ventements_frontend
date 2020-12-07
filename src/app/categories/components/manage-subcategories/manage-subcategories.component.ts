import { Component, OnInit } from '@angular/core';
import {Categories, Category} from '../../types/category';
import {CategoriesServerService} from '../../repositories/categories-server.service';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.scss']
})
export class ManageSubcategoriesComponent implements OnInit {

  categories: Categories = [];
  category: Category = { title: "" };

  constructor(private categoriesService: CategoriesServerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initCategories();
    this.getCategoryByIdFromRoute();
  }

  private initCategories() {
    this.categoriesService.query().subscribe(
      categories => this.categories = categories
    );
  }

  private getCategoryByIdFromRoute() {
    this.route.paramMap.pipe(
      filter(params => +params.get('id') !== 0),
      map(params => +params.get('id')),
      // tap(id => /*this.idCategory = id*/ console.log(id)),
      switchMap(id => this.categoriesService.getCategoryById(id))
    ).subscribe(category => this.category = category);
  }
}
