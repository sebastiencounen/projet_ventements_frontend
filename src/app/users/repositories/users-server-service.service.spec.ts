import { TestBed } from '@angular/core/testing';

import { UsersServerServiceService } from './users-server-service.service';

describe('UsersServerServiceService', () => {
  let service: UsersServerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
