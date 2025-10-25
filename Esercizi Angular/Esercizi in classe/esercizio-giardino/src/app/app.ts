import { Component } from '@angular/core';
import { Plant } from "./component/plant/plant";
import { CommonModule } from '@angular/common';

type PlantType = {
  name: string;
  waterLevel: number;
  maxWater: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, Plant],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'esercizio-giardino';
  
  plants: PlantType[] = [
    { name: 'Rosa', waterLevel: 1, maxWater: 3 },
    { name: 'Basilico', waterLevel: 0, maxWater: 3 },
    { name: 'Orchidea', waterLevel: 2, maxWater: 3 }
  ];

  onWaterPlant(index: number) {
    const plant = this.plants[index];
    if (plant.waterLevel < plant.maxWater) {
      plant.waterLevel++;
    }
  }

  resetGarden() {
    this.plants.forEach(p => p.waterLevel = 0);
  }

  get allBlooming() {
    return this.plants.every(p => p.waterLevel === p.maxWater);
  }
}
