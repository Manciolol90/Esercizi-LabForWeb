import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primo-numero',
  imports: [CommonModule, FormsModule],
  templateUrl: './primo-numero.html',
  styleUrl: './primo-numero.scss',
})
export class PrimoNumero {
  primoNumero!: number;

  constructor() {
    console.log('PrimoNumero component created');
  }

  digita(numero: number) {
    this.numeroDigitato.emit(numero);
  }
  @Output() numeroDigitato = new EventEmitter<number>();
}
