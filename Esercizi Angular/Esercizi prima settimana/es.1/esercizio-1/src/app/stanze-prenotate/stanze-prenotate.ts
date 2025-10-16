import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stanze-prenotate',
  imports: [CommonModule],
  templateUrl: './stanze-prenotate.html',
  styleUrl: './stanze-prenotate.scss',
})
export class StanzePrenotate {
  @Output() annullaPrenotazione = new EventEmitter<any>();

  annulla(stanza: any) {
    this.annullaPrenotazione.emit(stanza);
  }
  @Input() stanze: {
    id: number;
    tipologia: 'singola' | 'doppia' | 'tripla';
    descrizione: string;
    prezzo: number;
  }[] = [];
}
