import { TestBed } from '@angular/core/testing';

import { AlbumList } from './album-list';

describe('AlbumList', () => {
  let service: AlbumList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
