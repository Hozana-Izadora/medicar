import { EspecialidadesService } from './../../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css']
})
export class ConsultaCreateComponent implements OnInit {

  constructor(private EspecialidadesService: EspecialidadesService) { }

  ngOnInit(): void {
    this.EspecialidadesService.list().subscribe((result: any) => {
      console.log(result)
    })
  }

}
