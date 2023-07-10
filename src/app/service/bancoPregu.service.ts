import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BancoPregu } from '../models/bancoPregu';

@Injectable({
  providedIn: 'root'
})
export class BancoPreguService {
url='http://localhost:4000/api/bancoPregu/';
  constructor(private http: HttpClient) { }

  getBancoPregu():Observable<any>{
    return this.http.get(this.url)
  }

  deleteBancoPregu(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  guardarBancoPregu(bancoPregu:BancoPregu):Observable<any>{
    return this.http.post(this.url, bancoPregu);
  }
}