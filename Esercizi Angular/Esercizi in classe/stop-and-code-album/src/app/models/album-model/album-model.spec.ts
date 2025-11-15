import { TestBed } from '@angular/core/testing';

import { AlbumModel } from './album-model';

describe('AlbumModel', () => {
  let service: AlbumModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
