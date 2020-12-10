import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaggedItem, BaggedItems} from '../../types/bagged-item';
import {ElementToDelete} from '../../../common/types/element-to-delete';

@Component({
  selector: 'app-list-bagged-items',
  templateUrl: './list-bagged-items.component.html',
  styleUrls: ['./list-bagged-items.component.scss']
})
export class ListBaggedItemsComponent implements OnInit {

  @Input()
  items: BaggedItems = [];

  itemToModify: BaggedItem = { bagItem: null, quantity: 0, size: '' };
  isModalVisible: boolean = false;

  @Output()
  baggedItemDeleted: EventEmitter<ElementToDelete<BaggedItem>> = new EventEmitter<ElementToDelete<BaggedItem>>();

  @Output()
  baggedItemModified: EventEmitter<BaggedItem> = new EventEmitter<BaggedItem>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBaggedItem(element: ElementToDelete<BaggedItem>) {
    console.log(`Going to delete baggedItem of id : ${element.element.id}`);
    this.baggedItemDeleted.next(element);
  }

  modifyBaggedItem(item: BaggedItem) {
    this.itemToModify = { ...item };
    // this.itemToModify = item;
    this.isModalVisible = true;
  }

  cancelModif() {
    this.isModalVisible = false;
  }

  updateQuantity() {
    // console.log(this.itemToModify);
    this.baggedItemModified.next(this.itemToModify);
    this.isModalVisible = false;
  }
}
