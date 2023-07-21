import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';

@Component({
  selector: 'app-admin-iniciar-sesion',
  templateUrl: './admin-iniciar-sesion.component.html',
  styleUrls: ['./admin-iniciar-sesion.component.css']
})
export class AdminIniciarSesionComponent implements OnInit {
    loginUsuario: FormGroup;
    loading: boolean = false;
  
    constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private  toastr: ToastrService,
      private router: Router, private firebaseError: FirebaseCodeErrorService) {
        this.loginUsuario = this.fb.group({
          email: ['',[Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      }) }
  
    ngOnInit(): void {
    }
  
    login(){
      const email = this.loginUsuario.value.email;
      const password = this.loginUsuario.value.password;
  
      this.loading = true;
      this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user);
        if(user.user?.emailVerified){
            this.router.navigate(['/adminVista']);
        }else {
          this.router.navigate(['/verificacionCorreo']);
        }
      }).catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
    }
  
  }
  