import { TestBed } from '@angular/core/testing';

import { CategoriesServerService } from './categories-server.service';

describe('CategoriesServerService', () => {
  let service: CategoriesServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
