import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from './components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, MatSidenavModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('stop-and-code-album');
}
