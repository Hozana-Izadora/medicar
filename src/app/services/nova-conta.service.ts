import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovaContaService {
  urlBase = ' https://k6k3qur6vk.api.quickmocker.com/users';
  constructor(
    private http: HttpClient
  ) { }

  
    newUser(username: string, email: string, password: string){
      const body = {username: username, email: email, password: password};
      return this.http.post(this.urlBase,body);
    }

}
