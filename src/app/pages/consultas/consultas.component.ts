import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';

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
     console.log(this.consultas)
   })
  }
  newConsulta() {
    this.router.navigate(['consulta/add']);
  }
}
