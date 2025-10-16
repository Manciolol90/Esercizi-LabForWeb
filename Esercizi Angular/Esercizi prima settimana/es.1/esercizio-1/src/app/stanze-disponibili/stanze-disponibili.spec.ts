import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StanzeDisponibili } from './stanze-disponibili';

describe('StanzeDisponibili', () => {
  let component: StanzeDisponibili;
  let fixture: ComponentFixture<StanzeDisponibili>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StanzeDisponibili]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StanzeDisponibili);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
