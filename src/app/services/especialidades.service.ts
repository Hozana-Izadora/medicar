import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidades } from '../pages/consultas/consulta-create/consulta-create.module';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/especialidades/"

  constructor(private http: HttpClient) { }

    list(){
      return this.http.get(this.urlBase).subscribe(data => {     
        console.log(data);  
      }); 
    }
}
