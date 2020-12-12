import { Component, OnInit } from '@angular/core';
import {ItemsServerService} from '../../../items/repositories/items-server.service';
import {Item, Items} from '../../../items/types/item';
import {ElementToDelete} from '../../../common/types/element-to-delete';

@Component({
  selector: 'app-manage-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  items: Items = [];

  constructor(private itemsService: ItemsServerService) {}

  ngOnInit(): void {
    this.itemsService
      .query()
      .subscribe(
        items => this.items = items,
        err => console.log(err)
      );
  }

  deleteItem(item: ElementToDelete<Item>) {
    this.itemsService
      .deleteItem(item.element.id)
      .subscribe(
        _ => this.items.splice(item.index, 1),
        err => console.log(err)
      );
  }
}
