import { TestBed } from '@angular/core/testing';

import { UsersServerService } from './users-server.service';

describe('UsersServerServiceService', () => {
  let service: UsersServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
