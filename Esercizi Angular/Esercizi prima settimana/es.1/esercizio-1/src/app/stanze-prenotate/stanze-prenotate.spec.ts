import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanzePrenotate } from './stanze-prenotate';

describe('StanzePrenotate', () => {
  let component: StanzePrenotate;
  let fixture: ComponentFixture<StanzePrenotate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StanzePrenotate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StanzePrenotate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
