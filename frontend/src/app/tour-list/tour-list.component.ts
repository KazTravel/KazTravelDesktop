import {Component, Input, OnInit, Output} from '@angular/core';
import {City, Tour} from '../models'
import {TourlistService} from "../tourlist.service";


@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit{
  tours : Tour[] = [];
  tour_id:number | undefined;
  tour : Tour | undefined;
  data: any = [];

  @Input() city_id : number | undefined;
  @Input() hotel_id: number | undefined;


  constructor(private tourListService: TourlistService) {}

  remove(removeID: number){
    this.tours = this.tours.filter( (x) =>x.city_id!== removeID)
    console.log(this.tours)
    console.log(this.city_id)
  }

  ngOnInit(): void {
    this.tourListService.getToursByCityId(this.city_id).subscribe((data)=> {
      this.data = data;
      this.tours = this.data['result'];
      console.log(this.tours)
    });
  }

  onClick(id: number | undefined){
    this.tour_id = id;
    console.log(this.tour_id);
  }

}
