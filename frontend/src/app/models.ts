export interface Tour{
    id: number;
    city_id:number;
    name:string;
    info:string;
    rating:number;
    cost:number;
    free_places:number;
    max_places:number;
    picture_list:string;
    date_start:string;
    date_end:string;
    hotel_id:Hotel;
}

export interface Hotel{
    id:number;
    name:string;
    info:string;
    city_id: City;
}

export interface City{
    id:number;
    name:string;
    city:string;
}

export interface User{
    id:number;
    password:string;
    username:string;
    first_name:string;
    last_name:string;
    email:string;
    balance:number;
}

export interface Sell{
    user_id:User;
    tour_id:Tour;
}