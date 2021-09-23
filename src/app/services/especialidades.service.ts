import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidades } from '../pages/consultas/consulta-create/consulta-create.module';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  urlBase = "https://intmed-api-medicar.herokuapp.com/especialidades"

  constructor(private http: HttpClient) { }

  // getStarWarsAPI() {  
  //   return this.http.get('https://swapi.co/api/people/').subscribe(
  //     data => {     console.log(data);  }); }
  list(){
  //  let header = new HttpHeaders({ 
  //    'Content-Type': 'application/json',
  //    'Authorization': 'Token 5eb4fdc343dd922663945a0496dca7569b2514ab'
  //   })

   
    return this.http.get(this.urlBase)
  }
}
