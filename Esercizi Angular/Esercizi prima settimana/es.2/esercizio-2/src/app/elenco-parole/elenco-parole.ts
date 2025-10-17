import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-elenco-parole',
  imports: [CommonModule, FormsModule],
  templateUrl: './elenco-parole.html',
  styleUrl: './elenco-parole.scss',
})
export class ElencoParole {
  @Input() voce: { parola: string; significato: string }[] = [];
}
