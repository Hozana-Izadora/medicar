import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/users/login"
  constructor(private http: HttpClient) { }

  getUser(){
    const body = {username:"hozana-izadora",'password':"izadora2352"}

    return this.http.post(this.urlBase,body)  }
}
