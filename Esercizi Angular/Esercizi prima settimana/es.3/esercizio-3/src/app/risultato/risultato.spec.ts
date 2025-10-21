import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Risultato } from './risultato';

describe('Risultato', () => {
  let component: Risultato;
  let fixture: ComponentFixture<Risultato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Risultato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Risultato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
