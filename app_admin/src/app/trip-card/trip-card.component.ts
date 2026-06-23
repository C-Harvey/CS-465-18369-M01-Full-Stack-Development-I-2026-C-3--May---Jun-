import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: false,
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {

  @Input() trip: any;

  constructor(private router: Router) {}

  editTrip(trip: any): void {
    // store ID for edit page
    localStorage.setItem('tripCode', trip._id);

    // navigate to edit page
    this.router.navigate(['/edit-trip']);
  }
}