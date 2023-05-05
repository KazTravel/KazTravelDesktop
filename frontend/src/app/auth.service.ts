import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{access : string; refresh : string}>('http://127.0.0.1:8000/api/token/', {username: username, password: password})
      .pipe(
        map(result => {
          console.log(result.access)
          localStorage.setItem('access_token', result.access);
          localStorage.setItem('username', username);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}