import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aggiungi-parola',
  imports: [FormsModule],
  templateUrl: './aggiungi-parola.html',
  styleUrl: './aggiungi-parola.scss',
})
export class AggiungiParola {
  voce: { parola: string; significato: string }[] = [];
  nuovaParola: string = '';
  nuovoSignificato: string = '';
  aggiungiVoce() {
    if (this.nuovaParola && this.nuovoSignificato) {
      this.voce.push({
        parola: this.nuovaParola,
        significato: this.nuovoSignificato,
      });

      console.log('Aggiunta: ', this.nuovaParola, ' - ', this.nuovoSignificato);
      console.log('Elenco voci: ', this.voce);

      this.elencoVoci.emit(this.voce);
      this.nuovaParola = '';
      this.nuovoSignificato = '';
    }
  }
  @Output() elencoVoci = new EventEmitter<
    {
      parola: string;
      significato: string;
    }[]
  >();
}
