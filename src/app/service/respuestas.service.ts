import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Respuestas } from '../models/respuestas';
import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {
  url = 'http://localhost:4000/api/respuestas/';
  constructor(private http: HttpClient) { }

  getRespuestas(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarRespuestas(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarRespuestas(respuestas: Encuesta): Observable<any> {
    return this.http.post(this.url, respuestas);
  }

  obtenerRespuestasById(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarRespuestas(id: string, respuestas:Respuestas):Observable<any>{
    return this.http.put(this.url + id, respuestas);
  }
}
