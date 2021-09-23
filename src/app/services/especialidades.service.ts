import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/especialidades"

  constructor(private http: HttpClient) { }

  list(){

    let header = new HttpHeaders().set(
      "Authorization",
      "Token 5eb4fdc343dd922663945a0496dca7569b2514ab"
    );

    return this.http.get<JSON>(this.urlBase, {headers: header})
  }
}
