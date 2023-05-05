import { Injectable } from '@angular/core';
import {Tour} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TourlistService {

  constructor(private client: HttpClient) {}

  getTours():Observable<Tour[]>{
    return this.client.get<Tour[]>('http://127.0.0.1:8000/api/tours/');
  }

  getToursByCityId(city_id: number | undefined):Observable<Tour[]>{
    return this.client.get<Tour[]>(
        `http://127.0.0.1:8000/api/city/${city_id}/tours`
    )
  }
}
