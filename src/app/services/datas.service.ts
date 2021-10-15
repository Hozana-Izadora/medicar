import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Datas } from '../pages/consultas/consulta-create/consulta-create.model';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  private readonly URLBASE = `${environment.url}agendas/`;


  constructor(private http: HttpClient) { }

  listDatasbyMedicos(idMedico: number){
    const parameters = new HttpParams()
    .set('medico', idMedico)
    return this.http.get<Datas>(this.URLBASE, { params: parameters});
  }
}
