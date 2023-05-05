import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tour} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TourdetailsService implements OnInit{

  constructor(private client: HttpClient) { }

  id: number |undefined;

  ngOnInit(): void {
  }

  getTour(tour_id: number | undefined): Observable<Tour> {
    return this.client.get<Tour>(
        `http://127.0.0.1:8000/api/tours/${tour_id}`
        );
  }
}
