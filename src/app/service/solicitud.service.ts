import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitudEncuesta } from '../models/solicitudEncuesta';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  
  url='https://marketingboots.onrender.com/api/solicitud/';
  constructor(private http: HttpClient) { }

  getSolicitud():Observable<any>{
    return this.http.get(this.url)
  }

  deleteSolcitud(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  guardarSolicitud(solicitud:solicitudEncuesta):Observable<any>{
    return this.http.post(this.url, solicitud);
  }

  obtenerSolicitudById(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarSolicitud(id: string, solicitud:solicitudEncuesta):Observable<any>{
    return this.http.put(this.url + id, solicitud);
  }
}