import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGastoComponent } from './new-gasto.component';

describe('NewGastoComponent', () => {
  let component: NewGastoComponent;
  let fixture: ComponentFixture<NewGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
