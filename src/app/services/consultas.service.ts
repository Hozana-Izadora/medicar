import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, delay } from 'rxjs/operators';
import { ConfirmConsulta } from '../pages/consultas/consulta-create/consulta-create.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  private readonly URLBASE = `${environment.url}consultas`;
    listConsultas(){
      return this.http.get(this.URLBASE)
      
    }

    createConsulta(id:number, horario: Date){
      const body = { id: id, horario: horario };
      return this.http.post<ConfirmConsulta>(this.URLBASE,body)
    }

    delete(idConsulta: number){
      const parameter = this.URLBASE+idConsulta
      return this.http.delete(parameter)
    }
} 
