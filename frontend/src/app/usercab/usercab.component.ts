import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {UsercabService} from "../usercab.service";
import {User} from "../models";

@Component({
  selector: 'app-usercab',
  templateUrl: './usercab.component.html',
  styleUrls: ['./usercab.component.css']
})
export class UsercabComponent implements OnInit{
  user : User | undefined;
  data : any;
  public username!: string;
  public password!: string;
  public user_id!: number;
  public nameuser!: string | undefined;
  public firstname!: string | undefined;
  public lastname!: string | undefined;
  public email!: string | undefined;
  public balance!: number | undefined;
  public isItLogin: boolean = this.auth.loggedIn;

  constructor(private auth: AuthService, private router: Router, private usercabService:UsercabService) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe()

    // получяю токен и проверяю что я зареган
    console.log(localStorage.getItem('access_token'))
    console.log(this.auth.loggedIn)
    if (this.isItLogin == true){
      localStorage.setItem('username', this.username);
      this.getData();
    }
    this.refresh();
  }

  public getData(){
    const payload = this.getUserInfo();
    this.user_id = payload['user_id'];
    console.log(this.user_id);
    this.ngOnInit();
    console.log(this.firstname);

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

  public logout(){
    this.auth.logout();
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.usercabService.getUserById(this.user_id).subscribe((data)=>{
      this.data = data;
      // @ts-ignore
      this.user = data['result'];
      this.firstname = this.user?.first_name;
      this.lastname = this.user?.last_name;
      this.email = this.user?.email;
      this.balance = this.user?.balance;
      this.nameuser = this.user?.username;
      console.log(this.user);
    })
  }
}
