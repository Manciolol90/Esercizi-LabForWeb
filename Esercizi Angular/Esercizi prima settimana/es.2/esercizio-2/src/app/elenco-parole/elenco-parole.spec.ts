import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoParole } from './elenco-parole';

describe('ElencoParole', () => {
  let component: ElencoParole;
  let fixture: ComponentFixture<ElencoParole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencoParole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoParole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
