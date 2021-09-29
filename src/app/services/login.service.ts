import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlBase = 'https://intmed-api-medicar.herokuapp.com/users/login';
  constructor(private http: HttpClient,
    private localStorage: LocalStorageService) {}

  token: any;
  getUser(username: string, password: any) {
    const body = { username: username, password: password };
    this.token = this.http.post(this.urlBase, body);

    this.localStorage.setToken('token', this.token);
    this.localStorage.setToken('user', username);

    return this.token;
  }
}
