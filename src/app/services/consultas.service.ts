import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  private readonly URLBASE = `${environment.url}consultas`;
    listConsultas(){
      return this.http.get(this.URLBASE)
      
    }

    delete(idConsulta: number){
      const parameter = this.URLBASE+idConsulta
      return this.http.delete(parameter)
    }
} 
