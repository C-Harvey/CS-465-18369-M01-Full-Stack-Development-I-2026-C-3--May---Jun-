import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private url = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  getTripById(id: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.url}/${id}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, trip);
  }

  updateTrip(id: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.url}/${id}`, trip);
  }

  deleteTrip(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}