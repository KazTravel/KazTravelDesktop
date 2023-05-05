import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Sell} from "./models";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SellsService {
  user_id : number |undefined;
  constructor(private client: HttpClient) { }


  getSellsByUserID(user_id: number | undefined):Observable<Sell[]>{
    console.log(this.user_id);
    return this.client.get<Sell[]>(
        `http://127.0.0.1:8000/api/sell/${user_id}`,
    )
  }

  createSell(user_id: number, tour_id: number):Observable<boolean>{
    // console.log(user_id, tour_id);
    // const data = { user_id: user_id, tour_id: tour_id };
    // const json = JSON.stringify(data);
    // console.log(11)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // console.log(11)
    return this.client.post<{"isSuccess": boolean; "errorMessage": string | undefined;"result": Sell | undefined}>('http://localhost:8000/api/sell', { user_id: user_id, tour_id: tour_id })
        .pipe(
            map(result => {
              return (result.isSuccess == true);
            })
        );
  }
}