import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilleOperationComponent } from './portefeuille-operation.component';

describe('PortefeuilleOperationComponent', () => {
  let component: PortefeuilleOperationComponent;
  let fixture: ComponentFixture<PortefeuilleOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefeuilleOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilleOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
