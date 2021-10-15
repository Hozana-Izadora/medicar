import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Especialidades } from '../pages/consultas/consulta-create/consulta-create.model';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  private readonly URLBASE = `${environment.url}especialidades`;


  constructor(private http: HttpClient) { }

    listEspecialidades(){
      return this.http.get<Especialidades>(this.URLBASE)
    }
}
