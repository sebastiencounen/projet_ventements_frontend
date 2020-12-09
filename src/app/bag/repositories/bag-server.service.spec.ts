import { TestBed } from '@angular/core/testing';

import { BagServerService } from './bag-server.service';

describe('BagServerService', () => {
  let service: BagServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
