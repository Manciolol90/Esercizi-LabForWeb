import { Component, signal } from '@angular/core';
import { ListaProdotti } from './lista-prodotti/lista-prodotti';
import { BarraInserimento } from './barra-inserimento/barra-inserimento';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  imports: [
    ListaProdotti,
    BarraInserimento,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  prodotti: { nome: string; quantita: number }[] = [];
}
