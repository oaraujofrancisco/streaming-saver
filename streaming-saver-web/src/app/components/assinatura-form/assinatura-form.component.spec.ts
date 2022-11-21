import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaFormComponent } from './assinatura-form.component';

describe('AssinaturaFormComponent', () => {
  let component: AssinaturaFormComponent;
  let fixture: ComponentFixture<AssinaturaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssinaturaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssinaturaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
