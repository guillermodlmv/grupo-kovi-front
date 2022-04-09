import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensasClienteDetalleComponent } from './recompensas-cliente-detalle.component';

describe('RecompensasClienteDetalleComponent', () => {
  let component: RecompensasClienteDetalleComponent;
  let fixture: ComponentFixture<RecompensasClienteDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecompensasClienteDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensasClienteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
