import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AggiungiParola } from './aggiungi-parola/aggiungi-parola';
import { CercaParola } from './cerca-parola/cerca-parola';
import { ElencoParole } from './elenco-parole/elenco-parole';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AggiungiParola, CercaParola, ElencoParole, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('esercizio-2');
  constructor() {
    console.log('ciao');
  }
  voce: {
    parola: string;
    significato: string;
  }[] = [];
  filtro: string = '';
  aggiornaElenco(voci: { parola: string; significato: string }[]) {
    this.voce = voci;
  }
  aggiornaFiltro(termine: string) {
    this.filtro = termine;
  }
  voceFiltrata() {
    if (!this.filtro) return this.voce;
    return this.voce.filter(
      (v) =>
        v.parola.toLowerCase().includes(this.filtro) ||
        v.significato.toLowerCase().includes(this.filtro)
    );
  }
}
