import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/medicos/"

  constructor(private http: HttpClient) { }

    listMedicos(){
      return this.http.get(this.urlBase)
    }
}
