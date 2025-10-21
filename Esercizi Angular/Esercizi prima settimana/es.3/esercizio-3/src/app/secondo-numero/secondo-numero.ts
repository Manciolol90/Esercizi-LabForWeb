import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-secondo-numero',
  imports: [CommonModule, FormsModule],
  templateUrl: './secondo-numero.html',
  styleUrl: './secondo-numero.scss',
})
export class SecondoNumero {
  secondoNumero!: number;

  constructor() {
    console.log('SecondoNumero component created');
  }
  digita(numero: number) {
    this.numeroDigitato.emit(numero);
  }
  @Output() numeroDigitato = new EventEmitter<number>();
}
