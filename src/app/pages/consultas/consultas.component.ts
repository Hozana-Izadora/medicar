import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent implements OnInit {
  constructor(
    private router: Router,
    private ConsultasService: ConsultasService
  ) {}
  consultas:any = []

  ngOnInit(): void {
   this.ConsultasService.listConsultas().subscribe((result: any)=>{
     result.results.forEach((element:any)=>{
       this.consultas.push(element)
     })
   })
  }
  newConsulta() {
    this.router.navigate(['consulta/add']);
  }

  deleteConsulta(id:number){
   
    Swal.fire({
      title: 'Você deseja desmarcar a consulta?',
      showDenyButton: true,
      confirmButtonText: 'Desmarcar',
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Desmarcado!', '', 'success')       
        
        await window.location.reload();
      } 
    })    
  }
}
