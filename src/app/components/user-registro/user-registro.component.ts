import { FirebaseCodeErrorService } from './../../service/firebase-code-error.service';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registro',
  templateUrl: './user-registro.component.html',
  styleUrls: ['./user-registro.component.css']
})
export class UserRegistroComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) {
    this.registrarUsuario = this.fb.group({
      nombre: ['', Validators.required],
      paquete: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirContraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  registrar() {
    const nombre = this.registrarUsuario.value.nombre;
    const paquete = this.registrarUsuario.value.paquete;
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirContraseña = this.registrarUsuario.value.repetirContraseña;

    console.log(this.registrarUsuario);
    if (password != repetirContraseña) {
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error');
      return;
    }

    this.loading = true;
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.verificarCorreo();
      }).catch((error) => {
        this.loading = false;
        console.log(error);
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
  }

  verificarCorreo() {
    this.afAuth.currentUser.then(user => user?.sendEmailVerification()).then(() => {
      this.toastr.info('Le enviamos un correo electronico para su verificación', 'Verificar correo');
      this.router.navigate(['/inicioUsiario']);
    });
  }
}
