import { Injectable } from '@angular/core';
import {City} from './models'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private client: HttpClient) {}

  getCities():Observable<City[]>{
    return this.client.get<City[]>('http://127.0.0.1:8000/api/city/');
  }


}
