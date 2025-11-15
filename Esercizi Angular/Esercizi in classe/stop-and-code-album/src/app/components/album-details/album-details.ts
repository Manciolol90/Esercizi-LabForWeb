import { Component, OnInit } from '@angular/core';

import { AlbumModel } from '../../models/album-model/album-model';
import { AlbumService } from '../../services/album-service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-album-details',
  imports: [MatCardModule],
  templateUrl: './album-details.html',
  styleUrl: './album-details.scss',
})
export class AlbumDetails {}
