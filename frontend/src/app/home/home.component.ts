import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from "../home.service";
import {Tour} from '../models';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';


export class AppModule { }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private homeService: HomeService) {}

  // from : string="";
  // where: string="Алматы";
  // startDate:string="";
  // endDate:string="";
  // rating:number = 5;
  // count:number = 1;

  tours10 : Tour[] = [];
  tour_id:number | undefined;
  data: any = [];

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  // tour_filters():void{
  //   this.homeService.get_tour_filter(this.from,this.where, this.startDate,this.endDate, this.rating, this.count).subscribe((data: any)=>{
  //     this.data = data;
  //     this.toursFilter = this.data['result'];
  //     console.log(this.toursFilter);
  //   })
  // }


  ngOnInit(): void {
    this.homeService.get_top_ten().subscribe((data)=>{
      this.data = data;
      this.tours10 = this.data['result'];
      console.log(this.tours10);
    });
  }

  onClick(id: number | undefined){
    this.tour_id = id;
    console.log(this.tour_id);
  }

  // onClick2(){
  //   console.log(localStorage.getItem('where'));
  // }


}

