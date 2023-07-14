import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registro',
  templateUrl: './user-registro.component.html',
  styleUrls: ['./user-registro.component.css']
})
export class UserRegistroComponent implements OnInit {
  registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrarUsuario = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      contraseña: ['', Validators.required],
      repetirContraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  registrar() {
    const nombre = this.registrarUsuario.value.nombre;
    const edad = this.registrarUsuario.value.edad;
    const correoElectronico = this.registrarUsuario.value.correoElectronico;
    const contraseña = this.registrarUsuario.value.contraseña;
    const repetirContraseña = this.registrarUsuario.value.repetirContraseña;
    console.log(this.registrarUsuario);
  }
}
