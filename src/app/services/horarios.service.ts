import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Horarios } from '../pages/consultas/consulta-create/consulta-create.model';

@Injectable({
  providedIn: 'root',
})
export class HorariosService {
  private readonly URLBASE = `${environment.url}agendas/`;

  constructor(private http: HttpClient) {}

  listHorariosByDatas(idMedico: number, dia: string) {
    const parameters = new HttpParams()
      .set('medico', idMedico)
      .set('data_inicio', dia)
      .set('data_final', dia);

    return this.http.get<Horarios>(this.URLBASE, { params: parameters});
  }
}
