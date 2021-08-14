import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Motorcycle } from 'src/app/models/motorcycle';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-motorcycle-list',
  templateUrl: './motorcycle-list.component.html',
  styleUrls: ['./motorcycle-list.component.css']
})
export class MotorcycleListComponent implements OnInit {

motorcycles: Motorcycle[] = [];
newMotorcycle: Motorcycle = new Motorcycle();
motorcycleId: number = 0;
showUpdateButton: boolean = false;
totalMiles: number = 0;
totalWeight: number = 0;

  constructor(
    private motoService: MotoService
  ) { }

  ngOnInit(): void {
    this.loadMotorcycles();
  }

  loadMotorcycles() {
    this.motoService.index().subscribe(
      motorcycles => {
        this.motorcycles = motorcycles;
        this.aggregation();

      },
      noMotorcycles => {
        console.error('MotorcycleListComponent.loadMotorcycles(): error retreiving motorcycle list');
        console.error(noMotorcycles);
      }
    )
  }

  create(): void {
    this.motoService.create(this.newMotorcycle).subscribe(
      data => {
        this.loadMotorcycles();
        this.newMotorcycle = new Motorcycle();
      },
      err => {
        console.error('failed to add new motorcycle in component');
        console.error(err);
      }
    );
  }

  update(): void {
    this.motoService.update(this.newMotorcycle).subscribe(
      data => {
        this.loadMotorcycles();
        this.newMotorcycle = new Motorcycle();
        this.showUpdateButton = false;
      },
      err => {
        console.error('failed to update motorcycle in component');
        console.error(err);
      }
    );
  }

  motorcycleClick(motorcycle: Motorcycle): void {
    this.newMotorcycle = motorcycle;
    this.motorcycleId = motorcycle.id;
    this.showUpdateButton = true;
  }

  delete(): void {
    this.motoService.delete(this.motorcycleId).subscribe(
      data => {
        this.loadMotorcycles();
        this.newMotorcycle = new Motorcycle();
        this.showUpdateButton = false;
      },
      err => {
        console.error('failed to delete motorcycle in component');
        console.error(err);
      }
    );
  }

  aggregation(): void {
    this.totalMiles = 0;
    this.totalWeight = 0;
    for (let m of this.motorcycles) {
      this.totalMiles += m.routeLengthInMiles;
      this.totalWeight += m.weightInPounds;
    }
  }
}
