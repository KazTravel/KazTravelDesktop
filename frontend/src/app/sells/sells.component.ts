import {Component, Input, OnInit} from '@angular/core';
import {Sell, Tour} from "../models";
import {SellsService} from "../sells.service";
import {Router} from "@angular/router";
import {tours} from "../tours";

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.css']
})
export class SellsComponent implements OnInit{
  sell: Sell | undefined;
  @Input() user_id: number | undefined;
  tour_id: number | undefined;
  data: any = [];
  tours : Tour[] = [];
  constructor(private sellsService: SellsService){}

  getSellsByUserID(){
    this.sellsService.getSellsByUserID(this.user_id).subscribe((data)=>{
      this.data = data;
      this.tours = this.data['result'];
    })
  }
  ngOnInit(): void {
    // this.getSellsByUserID();
  }



}
