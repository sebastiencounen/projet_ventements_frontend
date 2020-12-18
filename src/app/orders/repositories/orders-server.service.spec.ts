import { TestBed } from '@angular/core/testing';

import { OrdersServerService } from './orders-server.service';

describe('OrdersServerService', () => {
  let service: OrdersServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
