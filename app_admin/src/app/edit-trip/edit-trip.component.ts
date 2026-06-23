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

  trip!: Trip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.tripService.getTripById(id).subscribe((data: Trip) => {
        this.trip = data;
      });
    }
  }

  onSubmit(): void {
    this.tripService.updateTrip(this.trip._id!, this.trip).subscribe(() => {
      alert('Trip updated successfully');
      this.router.navigate(['/']);
    });
  }
}