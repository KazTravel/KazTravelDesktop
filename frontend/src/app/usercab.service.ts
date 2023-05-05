import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./models";

@Injectable({
  providedIn: 'root'
})
export class UsercabService {

  constructor(private client: HttpClient) { }


  getUserById(user_id: number):Observable<any>{
    return this.client.get<any>(
        `http://127.0.0.1:8000/api/userlist/${user_id}`
    )
  }
}
