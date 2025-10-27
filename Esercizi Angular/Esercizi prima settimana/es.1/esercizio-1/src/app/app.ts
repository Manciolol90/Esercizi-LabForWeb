import { Component, signal } from '@angular/core';
import { StanzeDisponibili } from './stanze-disponibili/stanze-disponibili';
import { CommonModule } from '@angular/common';
import { StanzePrenotate } from './stanze-prenotate/stanze-prenotate';

@Component({
  selector: 'app-root',
  imports: [CommonModule, StanzeDisponibili, StanzePrenotate],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('esercizio-1');
  constructor() {
    console.log('App component created');
  }
  stanzeDisponibili: {
    id: number;
    tipologia: 'singola' | 'doppia' | 'tripla';
    descrizione: string;
    prezzo: number;
  }[] = [
    {
      id: 1,
      tipologia: 'singola',
      descrizione: 'Stanza singola non finestrata',
      prezzo: 70,
    },
    {
      id: 2,
      tipologia: 'singola',
      descrizione: 'Stanza singola vista piscina',
      prezzo: 50,
    },
    {
      id: 3,
      tipologia: 'doppia',
      descrizione: 'Stanza doppia matrimoniale',
      prezzo: 80,
    },
    {
      id: 4,
      tipologia: 'tripla',
      descrizione: 'Stanza tripla con matrimoniale e letto singolo',
      prezzo: 140,
    },
    {
      id: 5,
      tipologia: 'doppia',
      descrizione: 'Stanza doppia con due letti singoli',
      prezzo: 80,
    },
    {
      id: 6,
      tipologia: 'tripla',
      descrizione: 'Stanza tripla con tre letti singoli',
      prezzo: 120,
    },
  ];

  stanzePrenotate: {
    id: number;
    tipologia: 'singola' | 'doppia' | 'tripla';
    descrizione: string;
    prezzo: number;
  }[] = [];

  // questa funzione riceve come parametro la stanza cliccata dall'elenco delle stanze disponibili
  StanzaSelezionata(stanza: any) {
    //andiamo a sovrascrivere l'elenco delle stanze disponibili, eliminando quella appena prenotata
    this.stanzeDisponibili = this.stanzeDisponibili.filter((s) => s.id !== stanza.id);

    // push della stanza prenotata nell'elenco delle stanze prenotate
    this.stanzePrenotate.push(stanza);

    console.log('Stanza prenotata:', stanza);
  }
  AnnullaPrenotazione(stanza: any) {
    //stessa cosa ma nella colonna delle stanze prenotate
    this.stanzePrenotate = this.stanzePrenotate.filter((s) => s.id !== stanza.id);
    this.stanzeDisponibili.push(stanza);
    console.log('Stanza annullata:', stanza);
  }
  prezzoTotale(): number {
    return this.stanzePrenotate.reduce((totale, stanza) => totale + stanza.prezzo, 0);
  }
}
