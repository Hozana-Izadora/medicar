import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient,
   ) { }
   private readonly URLBASE = `${environment.url}users/login`;
  token: any;
  getUser(username: string, password: any) {
    const body = { username: username, password: password };
    return this.http.post(this.URLBASE, body);
  }
}
