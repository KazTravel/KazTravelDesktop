import {Component, OnInit} from '@angular/core';
import {Hotel} from '../models'
import {CityService} from "../city.service";
import {HotelService} from "../hotel.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit{
  hotels : Hotel[] = [];
  id : number | undefined;
  data: any = [];

  constructor(private hotelService: HotelService){}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((data)=>{
      this.data = data;
      this.hotels = this.data['result'];
      console.log(this.hotels);
    })
  }

  onClick(id: number){
    this.id = id;
  }

}
