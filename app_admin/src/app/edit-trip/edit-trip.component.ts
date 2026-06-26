import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {

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

  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.tripService.getTripById(this.id).subscribe((data: Trip) => {
      this.trip = data;
    });
  }

  onSubmit(): void {
    this.tripService.updateTrip(this.id, this.trip).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}