import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {

  @Input() trip!: Trip;

  constructor(private router: Router) {}

  onEditClick(): void {
    this.router.navigate(['/edit', this.trip._id]);
  }
}