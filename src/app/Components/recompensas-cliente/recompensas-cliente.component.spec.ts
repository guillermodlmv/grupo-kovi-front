import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensasClienteComponent } from './recompensas-cliente.component';

describe('RecompensasClienteComponent', () => {
  let component: RecompensasClienteComponent;
  let fixture: ComponentFixture<RecompensasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecompensasClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
