import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent {

  @Input() trip!: Trip;

  @Output() edit = new EventEmitter<Trip>();

  @Output() delete = new EventEmitter<Trip>();

  onEditClick(): void {
    this.edit.emit(this.trip);
  }

  onDeleteClick(): void {
    this.delete.emit(this.trip);
  }
}