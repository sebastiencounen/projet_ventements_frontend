import {Component, Input, OnInit} from '@angular/core';
import {Items} from '../../types/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Input() items: Items;

  constructor() { }

  ngOnInit(): void {
  }

}
