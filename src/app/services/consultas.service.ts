import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  urlBase = "https://k6k3qur6vk.api.quickmocker.com/consultas/"

  constructor(private http: HttpClient) { }

    listConsultas(){
      return this.http.get(this.urlBase)
    }

    delete(idConsulta: number){
      const parameter = this.urlBase+idConsulta
      return this.http.delete(parameter)
    }
}
