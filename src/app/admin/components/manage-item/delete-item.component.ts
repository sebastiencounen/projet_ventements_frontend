import { Component, OnInit } from '@angular/core';
import {ItemsServerService} from '../../../items/repositories/items-server.service';
import {Items} from '../../../items/types/item';

@Component({
  selector: 'app-manage-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  items: Items = [];

  constructor(private itemsService: ItemsServerService) {}

  ngOnInit(): void {
  }

}
