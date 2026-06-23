import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: false,
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {
    console.log('trip-listing constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.tripService.getTrips().subscribe({
      next: (data) => {
        console.log('API data received:', data);
        this.trips = data;
      },
      error: (err) => {
        console.log('API error:', err);
      }
    });
  }
}