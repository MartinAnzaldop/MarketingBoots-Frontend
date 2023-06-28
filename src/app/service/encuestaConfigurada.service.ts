import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { encuestaConfigurada } from '../models/encuestaConfigurada';

@Injectable({
  providedIn: 'root'
})
export class EncuestaConfiguradaService {
url='http://localhost:4000/api/encuestaConfigurada/';
  constructor(private http: HttpClient) { }

  getEncuestaConfigurada():Observable<any>{
    return this.http.get(this.url)
  }

  deleteEncuestaConfigurada(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  guardarEncuestaConfigurada(encuestaConfigurada:encuestaConfigurada):Observable<any>{
    return this.http.post(this.url, encuestaConfigurada);
  }
}