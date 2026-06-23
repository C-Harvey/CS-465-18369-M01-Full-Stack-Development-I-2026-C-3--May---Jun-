import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent implements OnInit {

  addForm!: FormGroup;
  submitted = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() {
    return this.addForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.tripService.addTrip(this.addForm.value).subscribe({
      next: (res) => {
        console.log('Trip added:', res);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('Error adding trip:', err);
        this.message = 'Error adding trip';
      }
    });
  }
}