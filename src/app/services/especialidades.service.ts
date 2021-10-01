import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {
  urlBase = "https://k6k3qur6vk.api.quickmocker.com/especialidades/"

  constructor(private http: HttpClient) { }

    listEspecialidades(){
      return this.http.get(this.urlBase)
    }
}
