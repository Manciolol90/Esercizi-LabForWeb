import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cerca-parola',
  imports: [CommonModule, FormsModule],
  templateUrl: './cerca-parola.html',
  styleUrl: './cerca-parola.scss',
})
export class CercaParola {
  termine: string = '';

  // emette il testo digitato al genitore
  @Output() cerca = new EventEmitter<string>();

  onKeyPress() {
    this.cerca.emit(this.termine.toLowerCase());
  }

  resetRicerca() {
    this.termine = '';
    this.cerca.emit('');
  }
}
