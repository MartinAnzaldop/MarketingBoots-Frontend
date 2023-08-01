import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BancoPregu } from 'src/app/models/bancoPregu';
import { BancoPreguService } from 'src/app/service/bancoPregu.service';

@Component({
  selector: 'app-lista-banco-preguntas',
  templateUrl: './lista-banco-preguntas.component.html',
  styleUrls: ['./lista-banco-preguntas.component.css']
})
export class ListaBancoPreguntasComponent implements OnInit {
  listaBancoPregu:BancoPregu []=[];

    constructor(private _BancoPreguService: BancoPreguService, private toastr: ToastrService,
      private router: Router){ }

    ngOnInit(): void {
      this.obtenerBancoPregu()
    }

    obtenerBancoPregu(){
    this._BancoPreguService.getBancoPregu().subscribe(data=>{
      console.log(data);
      this.listaBancoPregu=data;
    },error=>{
    console.log(error)
    })
  }

  eliminarBancoPregu(id:any){
    this._BancoPreguService.deleteBancoPregu(id).subscribe(data=>{
    this.toastr.error('La pregunta fue eliminada con exito','Pregunta eliminada');
    this.obtenerBancoPregu();
    this.router.navigate(['/listaBancoPreguntas'])
    },error=>{
      console.log(error)
    })
  }
}
