import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-risultato',
  imports: [],
  templateUrl: './risultato.html',
  styleUrl: './risultato.scss',
})
export class Risultato {
  @Input() risultato: any;
  @Output() calcola = new EventEmitter<void>();
}
