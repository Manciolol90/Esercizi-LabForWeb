import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AlbumList } from '../album-list/album-list';
import { Header } from '../header/header';

@Component({
  selector: 'app-dashboard',
  imports: [MatSidenavModule, MatListModule, RouterModule, AlbumList, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
