import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVirementComponent } from './form-virement.component';

describe('FormVirementComponent', () => {
  let component: FormVirementComponent;
  let fixture: ComponentFixture<FormVirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
