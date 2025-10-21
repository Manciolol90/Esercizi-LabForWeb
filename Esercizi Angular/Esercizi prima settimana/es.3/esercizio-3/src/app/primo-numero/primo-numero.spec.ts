import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoNumero } from './primo-numero';

describe('PrimoNumero', () => {
  let component: PrimoNumero;
  let fixture: ComponentFixture<PrimoNumero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimoNumero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimoNumero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
