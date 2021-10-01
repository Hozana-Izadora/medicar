import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlBase = 'https://k6k3qur6vk.api.quickmocker.com/users/login';
  constructor(private http: HttpClient,
   ) { }

  token: any;
  getUser(username: string, password: any) {
    const body = { username: username, password: password };
    return this.http.post(this.urlBase, body);
  }
}
