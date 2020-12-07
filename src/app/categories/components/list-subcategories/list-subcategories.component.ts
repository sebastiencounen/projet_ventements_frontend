import {Component, Input, OnInit} from '@angular/core';
import {Categories, Category} from '../../types/category';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.scss']
})
export class ListSubcategoriesComponent implements OnInit {

  @Input() category: Category;
  @Input() categories: Categories;

  constructor() { }

  ngOnInit(): void {
  }

}
