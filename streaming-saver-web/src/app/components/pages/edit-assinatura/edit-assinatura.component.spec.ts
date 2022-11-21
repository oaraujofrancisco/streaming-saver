import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssinaturaComponent } from './edit-assinatura.component';

describe('EditAssinaturaComponent', () => {
  let component: EditAssinaturaComponent;
  let fixture: ComponentFixture<EditAssinaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAssinaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAssinaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
