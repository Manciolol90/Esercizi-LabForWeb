import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-barra-inserimento',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './barra-inserimento.html',
  styleUrl: './barra-inserimento.scss',
})
export class BarraInserimento {
  clickEvent(event: MouseEvent) {
    event.stopPropagation();
  }
}
