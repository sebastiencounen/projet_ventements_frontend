import { Component, OnInit } from '@angular/core';
import {Items} from '../../types/item';
import {ItemsServerService} from '../../repositories/items-server.service';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.scss']
})
export class ManageItemsComponent implements OnInit {

  items: Items;

  constructor(private itemsService: ItemsServerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initItems();
  }

  private initItems() {
    this.route.paramMap.pipe(
      filter(params => +params.get('id') !== 0),
      map(params => +params.get('id')),
      switchMap(id => this.itemsService.getItemsByCategoryId(id))
    ).subscribe(items => this.items = items);
  }
}
