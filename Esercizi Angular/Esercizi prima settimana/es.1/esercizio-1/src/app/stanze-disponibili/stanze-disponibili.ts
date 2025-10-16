import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stanze-disponibili',
  imports: [CommonModule],
  templateUrl: './stanze-disponibili.html',
  styleUrl: './stanze-disponibili.scss',
})
export class StanzeDisponibili {
  //con questo input riceviamo i dati da app.ts, contenente l'elenco delle stanze
  @Input() stanze: {
    id: number;
    tipologia: 'singola' | 'doppia' | 'tripla';
    descrizione: string;
    prezzo: number;
  }[] = [];

  //con questo output comunico alla app.ts la stanza su cui ho cliccato
  @Output() stanzaSelezionata = new EventEmitter<any>();
  prenota(stanza: any) {
    this.stanzaSelezionata.emit(stanza);
  }
}
