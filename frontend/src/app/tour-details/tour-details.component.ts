import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Tour} from '../models'
import {TourdetailsService} from "../tourdetails.service";
import {SellsService} from "../sells.service";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class  TourDetailsComponent implements OnInit{
  tour: Tour | undefined;
  data: any | undefined;
  constructor(private route: ActivatedRoute, private tourDetailsService: TourdetailsService, private sellsService:SellsService) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['id']);
    // console.log(id)
    this.tourDetailsService.getTour(id).subscribe((data)=>{
      this.data = data;
      this.tour = this.data['result'];
      // console.log(this.tour);
    })
  }

  buyTour(){
    const payload = this.getUserInfo();
    let user_id = payload['user_id'];
    let tour_id = Number(this.route.snapshot.params['id']);
    // console.log(user_id, tour_id);
    this.sellsService.createSell(user_id, tour_id)
        .pipe(first())
        .subscribe((data: boolean) =>
        {
          //  что делать когда куплено
          if(data == true){

          }
        });
  }

  getUserInfo() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  getToken() {
    return localStorage.getItem("access_token");
  }


}