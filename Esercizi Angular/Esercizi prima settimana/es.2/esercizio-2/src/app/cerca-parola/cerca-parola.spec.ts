import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaParola } from './cerca-parola';

describe('CercaParola', () => {
  let component: CercaParola;
  let fixture: ComponentFixture<CercaParola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CercaParola]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CercaParola);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
