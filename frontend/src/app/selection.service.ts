// import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {Observable} from "rxjs";
// import {Tour} from "./models";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class SelectionService {
//   private apiURL = 'http://localhost:8000/api/tours/filter';
//   constructor(private client: HttpClient) { }
//   data: any[] = [];
//   filter_search():Observable<Tour[]>{
//     return this.client.get<Tour[]>(
//         ''
//     );
//   }
//
//   getFilteredTours(fromCity: string, toCity: string, startDate: Date, endDate: Date, rating: number, count: number): Observable<any[]> {
//     const requestBody = {
//       from: fromCity,
//       where: toCity,
//       startDate: startDate.toISOString(),
//       endDate: endDate.toISOString(),
//       rating,
//       count
//     };
//     const headers = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.client.post<Tour[]>(this.apiURL, JSON.stringify(requestBody), { headers });
//   }
// }

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tour} from "./models";

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private apiURL = 'http://localhost:8000/api/tours/filter';
  constructor(private client: HttpClient) { }
  data: any[] = [];

  getFilteredTours(fromCity: string, toCity: string, startDate: string, endDate: string, rating: number, count: number): Observable<any[]> {
    const requestBody = {
      from: fromCity,
      where: toCity,
      startDate: startDate,
      endDate: endDate,
      rating,
      count
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.client.post<Tour[]>(this.apiURL, JSON.stringify(requestBody), { headers });
  }
}