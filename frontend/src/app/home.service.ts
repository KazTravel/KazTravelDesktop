import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tour} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  BASE_URL = 'http://127.0.0.1:8000';
  data: any;

  constructor(private client: HttpClient) { }

  get_top_ten(): Observable<Tour[]>{
    return this.client.get<Tour[]>(
        'http://localhost:8000/api/tours/top_ten'
    )
  }

  get_tour_filter(fromCity: string,whereCity:string, startDate:string, endDate:string, rating:number, count:number){
    const url = 'http://localhost:8000/api/tours/filter';
    const params = {
      fromCity: fromCity,
      whereCity: whereCity,
      startDate: startDate,
      endDate: endDate,
      rating: rating,
      count: count,
    }
    const paramss = JSON.stringify(params);



    this.client.post(url, { paramss}).subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);
        },
        (error) => {
          console.error(error);
        }
    );

    return this.data;
    // return this.client.get<Tour[]>(
    //     'http://localhost:8000/api/tours/filter',
    //     []
    // )
  }

}
