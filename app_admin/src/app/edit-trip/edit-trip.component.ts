import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {

  editForm!: FormGroup;
  submitted = false;
  message = '';

  tripCode: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {

    this.tripCode = localStorage.getItem('tripCode');

    if (!this.tripCode) {
      alert('No trip selected');
      this.router.navigate(['/']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [''],
      code: [this.tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripService.getTrip(this.tripCode).subscribe({
      next: (trip: any) => {
        this.editForm.patchValue(trip);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    const id = this.editForm.value._id;

    this.tripService.updateTrip(id, this.editForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}