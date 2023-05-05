import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {UserData} from "../data";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  public username!: string;
  public user_id!: number;
  public isItLogin: boolean = this.auth.loggedIn;
  constructor(private auth: AuthService, private router: Router) { }

  // @ts-ignore
  // username:string = toString(localStorage.getItem('username'));
  public pr(){
    const payload = this.getUserInfo();
    this.user_id = payload['user_id'];
    console.log(this.user_id)
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


  user = localStorage.getItem('username');
  public logout(){
    this.auth.logout();
    this.refresh();
  }

  goToLoginPage() {
    this.router.navigate(['/usercab']);
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
