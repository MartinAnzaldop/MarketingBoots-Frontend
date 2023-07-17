import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PreguntaSelecUser } from '../models/preguntaSelecUser';

@Injectable({
  providedIn: 'root'
})
export class PreguntaSelecUserService {
url='http://localhost:4000/api/preguntaSelecUser/';
  constructor(private http: HttpClient) { }

  getPreguntaSelecUser():Observable<any>{
    return this.http.get(this.url)
  }

  deletePreguntaSelecUser(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  guardarPreguntaSelecUser(preguntaSelecUser:PreguntaSelecUser):Observable<any>{
    return this.http.post(this.url, preguntaSelecUser);
  }

  obtenerPreguntaSelecUserById(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarPreguntaSelecUser(id: string, preguntaSelecUser:PreguntaSelecUser):Observable<any>{
    return this.http.put(this.url + id, preguntaSelecUser);
  }
}