import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {
  private email: string = '';

constructor() { }

setEmail(email: string) {
  this.email = email;
}

getEmail() {
  return this.email;
}
}
