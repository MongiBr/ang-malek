import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRemiseComponent } from './form-remise.component';

describe('FormRemiseComponent', () => {
  let component: FormRemiseComponent;
  let fixture: ComponentFixture<FormRemiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRemiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRemiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
