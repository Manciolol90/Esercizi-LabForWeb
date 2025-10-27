import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-prodotti',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-prodotti.html',
  styleUrl: './lista-prodotti.scss',
})
export class ListaProdotti {
  prodotti = [
    { nome: 'Pane', quantita: 2 },
    { nome: 'Latte', quantita: 1 },
  ];
}
