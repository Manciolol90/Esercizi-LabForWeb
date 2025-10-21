import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Operatore } from './operatore/operatore';
import { PrimoNumero } from './primo-numero/primo-numero';
import { SecondoNumero } from './secondo-numero/secondo-numero';
import { Risultato } from './risultato/risultato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Operatore, PrimoNumero, SecondoNumero, Risultato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('esercizio-3');
  constructor() {
    console.log('App component created');
  }
  primoNumero!: number;
  secondoNumero!: number;
  operatore!: string;
  risultato!: number | string;
  onPrimoNumeroDigitato(numero: number) {
    this.primoNumero = numero;
  }

  onSecondoNumeroDigitato(numero: number) {
    this.secondoNumero = numero;
  }

  onOperatoreDigitato(operatore: string) {
    this.operatore = operatore;
  }

  calcolaRisultato(): any {
    switch (this.operatore) {
      case '+':
        this.risultato = this.primoNumero + this.secondoNumero;
        break;
      case '-':
        this.risultato = this.primoNumero - this.secondoNumero;
        break;
      case '*':
        this.risultato = this.primoNumero * this.secondoNumero;
        break;
      case '/':
        this.risultato =
          this.secondoNumero !== 0
            ? this.primoNumero / this.secondoNumero
            : 'Errore: divisione per zero';
        break;
      default:
        this.risultato = 'In attesa...';
    }
  }
}
