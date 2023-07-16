import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private  toastr: ToastrService,
    private router: Router, private firebaseError: FirebaseCodeErrorService) {
      this.recuperarUsuario = this.fb.group({
        correo: ['',[Validators.required, Validators.email]],
      })
    }

  ngOnInit(): void {
  }

  recuperar () {
    const correoElectronico = this.recuperarUsuario.value.correo;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(correoElectronico).then(() =>{
      this.toastr.info('Se ha enviado un correo para recuperar la contraseña', 'Recuperar contraseña');
      this.router.navigate(['/inicioUsuario']);
    }).catch((error) =>{
      this.loading = false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
    }
}
