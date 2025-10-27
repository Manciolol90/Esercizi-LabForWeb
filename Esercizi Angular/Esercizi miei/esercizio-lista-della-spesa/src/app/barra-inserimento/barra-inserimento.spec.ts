import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInserimento } from './barra-inserimento';

describe('BarraInserimento', () => {
  let component: BarraInserimento;
  let fixture: ComponentFixture<BarraInserimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraInserimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraInserimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
