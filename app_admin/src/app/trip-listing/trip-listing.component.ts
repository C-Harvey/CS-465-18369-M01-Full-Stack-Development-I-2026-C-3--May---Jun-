import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }

  onDelete(id: string): void {
    this.tripService.deleteTrip(id).subscribe(() => {
      this.loadTrips(); // refresh UI
    });
  }
}