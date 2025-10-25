import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Dolce {
  nome: string;
  disponibile: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected titolo = 'esercizio-pasticceria';

  dolci: Dolce[] = [
    { nome: 'Tiramisù', disponibile: true },
    { nome: 'Croissant', disponibile: true },
    { nome: 'Cheesecake', disponibile: false },
    { nome: 'Cannolo Siciliano', disponibile: true },
  ];

  compra(dolce: Dolce) {
    dolce.disponibile = false;
  }

  rifornisci() {
    this.dolci.forEach((d) => (d.disponibile = true));
  }

  get tuttiEsauriti() {
    return this.dolci.every((d) => !d.disponibile);
  }
}
