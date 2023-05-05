import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "./models";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private client: HttpClient ) {}

  getHotels():Observable<Hotel[]>{
    return this.client.get<Hotel[]>('http://127.0.0.1:8000/api/hotel/')
  }
}
