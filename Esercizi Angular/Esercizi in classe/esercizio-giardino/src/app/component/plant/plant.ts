import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plant',
  imports: [CommonModule],
  templateUrl: './plant.html',
  styleUrl: './plant.scss'
})
export class Plant {

  @Input() name!: string;
  @Input() waterLevel!: number;
  @Input() maxWater!: number;

  @Output() water = new EventEmitter<void>();

  get isBlooming() {
    return this.waterLevel === this.maxWater;
  }

  get statusText() {
    if (this.isBlooming) return 'Fiorita 🌸';
    if (this.waterLevel === 0) return 'Assetata 😢';
    return 'In crescita 🌿';
  }

  calcolaInnaffiatureMancanti() {
    return this.maxWater - this.waterLevel;
  }

  onWaterClick() {
    if (!this.isBlooming) {
      this.water.emit();
    }
  }
  
}
