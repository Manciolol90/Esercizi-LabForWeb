import { Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-inserisci-album',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './inserisci-album.html',
  styleUrl: './inserisci-album.scss',
})
export class InserisciAlbum implements OnInit {
  @ViewChild('formInserimento') formInserimento!: NgForm;
  ngOnInit(): void {
    console.log('InserisciAlbum component initialized');
  }

  onSubmit(): void {
    console.log('Valori di formInserimento: ', this.formInserimento.value);
  }
}
