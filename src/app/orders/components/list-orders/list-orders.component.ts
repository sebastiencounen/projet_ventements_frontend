import {Component, Input, OnInit} from '@angular/core';
import {Orders} from '../../types/order';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  @Input() orders: Orders = [];

  constructor() { }

  ngOnInit(): void {
  }

}
