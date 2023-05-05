import {Component, OnInit} from '@angular/core';
import {CityService} from "../city.service";
import {City} from '../models'
import {TourListComponent} from "../tour-list/tour-list.component";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit{
  cities : City[] = [];

  id: number | undefined;
  data: any = [];

  constructor(private cityService: CityService){}

  ngOnInit(): void {
    this.cityService.getCities().subscribe((data)=>{
      this.data = data;
      this.cities = this.data['result'];
      console.log(this.cities);
    })
  }

  onClick(id: number){
    this.id = id;
  }


}
