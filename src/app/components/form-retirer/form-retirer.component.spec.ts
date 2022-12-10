import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRetirerComponent } from './form-retirer.component';

describe('FormRetirerComponent', () => {
  let component: FormRetirerComponent;
  let fixture: ComponentFixture<FormRetirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRetirerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRetirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
