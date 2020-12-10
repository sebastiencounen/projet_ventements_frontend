import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWishlistComponent } from './manage-wishlist.component';

describe('ManageWishlistComponent', () => {
  let component: ManageWishlistComponent;
  let fixture: ComponentFixture<ManageWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
