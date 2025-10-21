import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondoNumero } from './secondo-numero';

describe('SecondoNumero', () => {
  let component: SecondoNumero;
  let fixture: ComponentFixture<SecondoNumero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondoNumero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondoNumero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
