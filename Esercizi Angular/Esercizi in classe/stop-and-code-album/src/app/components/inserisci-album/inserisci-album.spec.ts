import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciAlbum } from './inserisci-album';

describe('InserisciAlbum', () => {
  let component: InserisciAlbum;
  let fixture: ComponentFixture<InserisciAlbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserisciAlbum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserisciAlbum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
