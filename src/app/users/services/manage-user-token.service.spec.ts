import { TestBed } from '@angular/core/testing';

import { ManageUserTokenService } from './manage-user-token.service';

describe('ManageUserTokenService', () => {
  let service: ManageUserTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
