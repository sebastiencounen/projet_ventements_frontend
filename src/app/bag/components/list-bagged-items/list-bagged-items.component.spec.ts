import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBaggedItemsComponent } from './list-bagged-items.component';

describe('ListBaggedItemsComponent', () => {
  let component: ListBaggedItemsComponent;
  let fixture: ComponentFixture<ListBaggedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBaggedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBaggedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
