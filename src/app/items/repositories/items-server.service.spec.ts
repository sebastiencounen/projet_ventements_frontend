import { TestBed } from '@angular/core/testing';

import { ItemsServerService } from './items-server.service';

describe('ItemsServerService', () => {
  let service: ItemsServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
