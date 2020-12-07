import {Component, Input, OnInit} from '@angular/core';
import {Categories} from '../../types/category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  @Input() categories: Categories = [];

  constructor() { }

  ngOnInit(): void {
  }

}
