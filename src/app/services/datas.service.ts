import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/agendas/"

  constructor(private http: HttpClient) { }

  listDatasbyMedicos(idMedico: number){
    const parameter = `${this.urlBase}?medico=${idMedico}`
    return this.http.get(parameter)
  }
}
