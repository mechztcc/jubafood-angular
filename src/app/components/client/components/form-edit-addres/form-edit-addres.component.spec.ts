import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditAddresComponent } from './form-edit-addres.component';

describe('FormEditAddresComponent', () => {
  let component: FormEditAddresComponent;
  let fixture: ComponentFixture<FormEditAddresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditAddresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditAddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
