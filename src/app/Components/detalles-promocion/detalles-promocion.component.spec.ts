import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPromocionComponent } from './detalles-promocion.component';

describe('DetallesPromocionComponent', () => {
  let component: DetallesPromocionComponent;
  let fixture: ComponentFixture<DetallesPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
