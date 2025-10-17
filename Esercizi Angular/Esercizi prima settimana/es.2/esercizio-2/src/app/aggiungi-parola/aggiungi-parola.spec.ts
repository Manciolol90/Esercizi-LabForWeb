import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiParola } from './aggiungi-parola';

describe('AggiungiParola', () => {
  let component: AggiungiParola;
  let fixture: ComponentFixture<AggiungiParola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiParola]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggiungiParola);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
