import { MedicosService } from './../../../services/medicos.service';
import { EspecialidadesService } from './../../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { Especialidades, Medicos } from './consulta-create.model';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css']
})


export class ConsultaCreateComponent implements OnInit {

  constructor(
    private EspecialidadesService: EspecialidadesService,
    private MedicosService: MedicosService,

  ) { }
  especialidades: any = []
  medicos: any = []
  
  ngOnInit(): void {
    this.EspecialidadesService.listEspecialidades().subscribe( (dataEspecialidades: any) => {
        dataEspecialidades.results.forEach((element:any) => {
        this.especialidades.push({value: element.id, label: element.nome})
      });
      console.log(this.especialidades)

      
    });
    // this.MedicosService.listMedicos().subscribe((dataMedicos: any )=> {
    //   dataMedicos.results.forEach((element:any )=> {
    //     this.medicos.push([element.id,element.crm,element.nome])
    //   });
    // });

  }
  
  
  getIdMedico(id:any) {
    alert('hello')
  } 

}
