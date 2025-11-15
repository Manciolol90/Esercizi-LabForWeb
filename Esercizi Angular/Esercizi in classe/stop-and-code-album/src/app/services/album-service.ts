import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AlbumModel } from '../models/album-model/album-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private http = inject(HttpClient);

  getAlbums(): Observable<AlbumModel[]> {
    return this.http.get<AlbumModel[]>(`https://jsonplaceholder.typicode.com/albums`);
  }
}
