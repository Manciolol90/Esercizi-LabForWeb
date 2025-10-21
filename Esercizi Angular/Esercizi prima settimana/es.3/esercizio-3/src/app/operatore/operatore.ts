import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operatore',
  imports: [FormsModule, CommonModule],
  templateUrl: './operatore.html',
  styleUrl: './operatore.scss',
})
export class Operatore {
  operatore!: string;

  constructor() {
    console.log('Operatore component created');
  }
  @Output() operatoreDigitato = new EventEmitter<string>();

  setOperatore(simbolo: string) {
    this.operatoreDigitato.emit(simbolo);
    this.operatore = simbolo;
  }
}
