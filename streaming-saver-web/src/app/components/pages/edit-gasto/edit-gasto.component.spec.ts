import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGastoComponent } from './edit-gasto.component';

describe('EditGastoComponent', () => {
  let component: EditGastoComponent;
  let fixture: ComponentFixture<EditGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
