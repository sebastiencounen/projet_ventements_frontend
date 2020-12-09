import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaggedItem, BaggedItems} from '../../types/bagged-item';
import {Bag} from '../../types/bag';
import {ElementToDelete} from '../../../common/types/element-to-delete';

@Component({
  selector: 'app-list-bagged-items',
  templateUrl: './list-bagged-items.component.html',
  styleUrls: ['./list-bagged-items.component.scss']
})
export class ListBaggedItemsComponent implements OnInit {

  @Input()
  items: BaggedItems = [];

  @Output()
  baggedItemDeleted: EventEmitter<ElementToDelete<BaggedItem>> = new EventEmitter<ElementToDelete<BaggedItem>>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBaggedItem(element: ElementToDelete<BaggedItem>) {
    console.log(`Going to delete baggedItem of id : ${element.element.id}`);
    this.baggedItemDeleted.next(element);
  }
}
