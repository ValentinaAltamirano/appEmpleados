import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectorComponentComponent } from './proyector-component.component';

describe('ProyectorComponentComponent', () => {
  let component: ProyectorComponentComponent;
  let fixture: ComponentFixture<ProyectorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectorComponentComponent]
    });
    fixture = TestBed.createComponent(ProyectorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
