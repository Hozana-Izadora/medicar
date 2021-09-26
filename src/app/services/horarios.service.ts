import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  urlBase = "https://intmed-api-medicar.herokuapp.com/agendas/"

  constructor(private http: HttpClient) { }

  listHorariosByDatas(idMedico: number, dia: string){
    const parameter = `${this.urlBase}?medico=${idMedico}&data_inicio=${dia}&data_final=${dia}`
    return this.http.get(parameter)

  }
}
