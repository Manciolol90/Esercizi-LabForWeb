import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('esercizio-finale');
}
