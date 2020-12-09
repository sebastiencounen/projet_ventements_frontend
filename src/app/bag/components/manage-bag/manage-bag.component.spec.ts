import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBagComponent } from './manage-bag.component';

describe('ManageBagComponent', () => {
  let component: ManageBagComponent;
  let fixture: ComponentFixture<ManageBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
