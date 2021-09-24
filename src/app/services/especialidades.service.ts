import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/especialidades/"

  constructor(private http: HttpClient) { }

    listEspecialidades(){
      return this.http.get(this.urlBase)
    }
}
