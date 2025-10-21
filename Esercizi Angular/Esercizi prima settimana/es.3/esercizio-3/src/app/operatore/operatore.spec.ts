import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operatore } from './operatore';

describe('Operatore', () => {
  let component: Operatore;
  let fixture: ComponentFixture<Operatore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Operatore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Operatore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
