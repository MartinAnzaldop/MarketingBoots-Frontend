import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PreguntaSelec } from '../models/preguntaSelec';

@Injectable({
  providedIn: 'root'
})
export class PreguntaSelecService {
url='http://localhost:4000/api/preguntaSelec/';
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
}