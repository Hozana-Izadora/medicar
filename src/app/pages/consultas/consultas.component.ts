import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultasService } from 'src/app/services/consultas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent implements OnInit {
  consultas: any = [];

  constructor(
    private router: Router,
    private ConsultasService: ConsultasService
  ) {}

  ngOnInit(): void {
    this.ConsultasService.listConsultas().subscribe((result: any) => {
      result.results.forEach((element: any) => {
        this.consultas.push(element);
      });
    });
  }

  //Nova consulta
  newConsulta() {
    this.router.navigate(['consulta/add']);
  }

  //Desmarcar Consulta
  deleteConsulta(id: number) {
    Swal.fire({
      title: 'Você deseja desmarcar a consulta?',
      showDenyButton: true,
      confirmButtonColor: '#49b4bb',
      confirmButtonText: 'Desmarcar',
      denyButtonText: `Cancelar`,
    }).then(async (confirm) => {
      if (confirm.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Consulta desmarcada!',
          confirmButtonColor: '#49b4bb',
        });
        this.ConsultasService.delete(id).subscribe((result) => {
          window.location.reload();
        });
      }
    });
  }
}
