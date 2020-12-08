import {Component, Input, OnInit} from '@angular/core';
import {BaggedItems} from '../../types/bagged-item';
import {Bag} from '../../types/bag';

@Component({
  selector: 'app-list-bagged-items',
  templateUrl: './list-bagged-items.component.html',
  styleUrls: ['./list-bagged-items.component.scss']
})
export class ListBaggedItemsComponent implements OnInit {

  @Input()
  items: BaggedItems = [];

  constructor() { }

  ngOnInit(): void {
  }

}
