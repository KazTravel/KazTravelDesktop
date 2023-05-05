import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tour} from '../models';
import{City, cities} from '../cities';
import {HottoursService} from "../hottours.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-hottours',
  templateUrl: './hottours.component.html',
  styleUrls: ['./hottours.component.css']
})
export class HottoursComponent implements OnInit{
  tours : Tour[] = [];
  @Input() city: string | undefined;
  data: any = [];

  constructor(private hotToursService: HottoursService, private http:HttpClient){}

  ngOnInit(): void {
  }

  remove(removeID: number){
    this.tours = this.tours.filter( (x) =>x.id !== removeID)
    console.log(this.tours)
  }

  getToursByCityId(city_id: number): void{
    this.hotToursService.getToursByCityId(city_id).subscribe((tours)=>{
      this.tours = tours;
    })
  }

  getData(){
    this.http.get('http://127.0.0.1:8000/api/city/').subscribe((res)=>{
    this.data = res;
    this.tours = this.data['result'];
    console.log(this.tours);
  })
  }

}
