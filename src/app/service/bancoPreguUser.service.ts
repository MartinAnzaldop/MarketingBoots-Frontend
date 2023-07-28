import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BancoPreguUser } from '../models/bancoPreguUser';

@Injectable({
  providedIn: 'root'
})
export class BancoPreguUserService {
url='http://localhost:4000/api/bancoPreguUser/';
  constructor(private http: HttpClient) { }

  getBancoPreguUser():Observable<any>{
    return this.http.get(this.url)
  }

  deleteBancoPreguUser(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  guardarBancoPreguUser(bancoPreguUser:BancoPreguUser):Observable<any>{
    return this.http.post(this.url, bancoPreguUser);
  }

  obtenerBancoPreguUserById(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarBancoPreguUser(id: string, bancoPreguUser:BancoPreguUser):Observable<any>{
    return this.http.put(this.url + id, bancoPreguUser);
  }
}