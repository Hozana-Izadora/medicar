import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newConsulta(){
    this.router.navigate(["consulta/add"])
  }

}