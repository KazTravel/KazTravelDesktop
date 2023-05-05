import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../models'
import {SelectionService} from "../selection.service";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.css']
})

export class SelectionComponent implements OnInit{
    //
    // fields
    fromCity : string ="";
    toCity: any="";
    startDate = new Date();
    tour_id:number | undefined;
    endDate = new Date();
    rating:number = 0;
    count:number=1;


    //
    tours : Tour[] = [];

    data: any[] = [];
    constructor(private selectionService: SelectionService) {
    }
    ngOnInit(): void {
    }


    onFilter(fromCity: string, toCity: string, startDate: string, endDate: string, rating: number, count: number) {
        this.selectionService.getFilteredTours(fromCity, toCity, startDate, endDate, rating, count)
            .subscribe((data)=>{
                    this.data = data;
                    // @ts-ignore
                    this.tours = this.data['result'];
                    console.log(this.tours);
                }
            );
    }

    onSubmit(){
        // console.log(this.toCity)
        // console.log(this.startDate.toString())
        // console.log(this.endDate)
        // console.log(this.rating)
        // console.log(this.count)
        // let ss = date_TO_String(start)
        this.onFilter('', this.toCity, this.startDate.toString(), this.endDate.toString(),this.rating,this.count);
    }

    onClick(id: number | undefined){
        this.tour_id = id;
        console.log(this.tour_id);
    }



}


// свою дату меняешь этой функцией в стринг
function date_TO_String(date_Object: Date): string {
    // get the year, month, date, hours, and minutes seprately and append to the string.
    let date_String: string =
        date_Object.getFullYear() +
        "-" +
        (((date_Object.getMonth() + 1) <= 9) ? ("0" + (date_Object.getMonth() + 1)) : (date_Object.getMonth() + 1) )+
        "-" +
        (((date_Object.getDate() + 1) <= 9) ? ("0" + (date_Object.getDate() + 1)) : (date_Object.getDate() + 1))
    return date_String;
}