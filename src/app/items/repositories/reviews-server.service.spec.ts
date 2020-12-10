import { TestBed } from '@angular/core/testing';

import { ReviewsServerService } from './reviews-server.service';

describe('ReviewsServerService', () => {
  let service: ReviewsServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
