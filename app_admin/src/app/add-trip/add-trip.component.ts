import { Component } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {

  trip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  constructor(private tripService: TripDataService) {}

  onSubmit(): void {
    this.tripService.addTrip(this.trip).subscribe(() => {
      alert('Trip added successfully');
    });
  }
}