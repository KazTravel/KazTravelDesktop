import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "./models";
import {Tour} from "./models"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HottoursService {

  constructor(private client: HttpClient){}

  getCities():Observable<City[]>{
    return this.client.get<City[]>(
        'http://127.0.0.1:8000/api/city/'
    )
  }
  getToursByCityId(city_id: number):Observable<Tour[]>{
    return this.client.get<Tour[]>(
        'http://127.0.0.1:8000/api/city/${city_id}'
    )
  }

}
