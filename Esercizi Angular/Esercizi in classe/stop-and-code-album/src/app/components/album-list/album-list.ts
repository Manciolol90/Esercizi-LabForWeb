import { Component, inject, OnInit } from '@angular/core';
import { AlbumModel } from '../../models/album-model/album-model';
import { AlbumService } from '../../services/album-service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-album-list',
  imports: [MatCardModule],
  templateUrl: './album-list.html',
  styleUrl: './album-list.scss',
})
export class AlbumList implements OnInit {
  albumService = inject(AlbumService);

  albums: AlbumModel[] = [];

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((albums: any) => {
      this.albums = albums;
    });
  }
}
