import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// Objeto de nova conta -> nick, email e senha
export class NovaContaService {
  constructor(private http: HttpClient) { }
  private readonly URLBASE = `${environment.url}users`;

    // Tem hash de senha?
    newUser(username: string, email: string, password: string){
      const body = {username: username, email: email, password: password};
      return this.http.post(this.URLBASE,body);
    }

}
