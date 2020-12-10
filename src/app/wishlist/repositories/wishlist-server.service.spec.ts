import { TestBed } from '@angular/core/testing';

import { WishlistServerService } from './wishlist-server.service';

describe('WishlistServerService', () => {
  let service: WishlistServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
