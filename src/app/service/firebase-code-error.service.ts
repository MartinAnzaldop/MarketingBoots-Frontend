import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnmu } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code:String){
    switch(code){

      //El correo ya existe
      case  FirebaseCodeErrorEnmu.EmailAlreadyInUse:
        return 'El usuario ya existe'
      //Contraseña devil
      case  FirebaseCodeErrorEnmu.WeakPassword:
        return 'La contraseña es muy debil'
      //Correo invalido
      case  FirebaseCodeErrorEnmu.InvalidEmail:
         return 'Correo invalido'
      //Contraseña incorrecta
      case FirebaseCodeErrorEnmu.WrongPassword:
      return 'Contraseña incorrecta'
      //El usuario no existe
      case FirebaseCodeErrorEnmu.UserNotFound:
        return 'El usuario no existe'
      default:
      return  'Error desconocido';
    }
  }
}
