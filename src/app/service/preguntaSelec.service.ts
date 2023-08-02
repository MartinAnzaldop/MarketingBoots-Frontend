import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PreguntaSelec } from '../models/preguntaSelec';

@Injectable({
  providedIn: 'root'
})
export class PreguntaSelecService {
url='https://marketingboots.onrender.com/api/preguntaSelec/';
  constructor(private http: HttpClient) { }

  getPreguntaSelec():Observable<any>{
    return this.http.get(this.url)
  }

  deletePreguntaSelec(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  guardarPreguntaSelec(preguntaSelec:PreguntaSelec):Observable<any>{
    return this.http.post(this.url, preguntaSelec);
  }

  obtenerPreguntaSelecById(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarPreguntaSelec(id: string, preguntaSelec:PreguntaSelec):Observable<any>{
    return this.http.put(this.url + id, preguntaSelec);
  }
}