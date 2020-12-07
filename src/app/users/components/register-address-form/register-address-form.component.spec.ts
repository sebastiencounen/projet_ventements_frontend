import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAddressFormComponent } from './register-address-form.component';

describe('RegisterAddressFormComponent', () => {
  let component: RegisterAddressFormComponent;
  let fixture: ComponentFixture<RegisterAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
