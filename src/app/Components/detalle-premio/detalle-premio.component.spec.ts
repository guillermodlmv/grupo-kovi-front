import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePremioComponent } from './detalle-premio.component';

describe('DetallePremioComponent', () => {
  let component: DetallePremioComponent;
  let fixture: ComponentFixture<DetallePremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePremioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
