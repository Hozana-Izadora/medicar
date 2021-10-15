import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Medicos } from '../pages/consultas/consulta-create/consulta-create.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }
  private readonly URLBASE = `${environment.url}medicos/`;

    listMedicos(){
      return this.http.get(this.URLBASE)
    }
    listMedicosbyEspecialidade(id:number){
      const  parameter = new HttpParams()
      .set('especialidade',id)      
      return this.http.get<Medicos>(this.URLBASE,{params:parameter})
    }
}
