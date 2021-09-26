import { MedicosService } from './../../../services/medicos.service';
import { EspecialidadesService } from './../../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import { Especialidades, Medicos } from './consulta-create.model';
import { DatasService } from 'src/app/services/datas.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html', 
  styleUrls: ['./consulta-create.component.css']
})


export class ConsultaCreateComponent implements OnInit {
  
  constructor(
    private router: Router,
    private EspecialidadesService: EspecialidadesService,
    private MedicosService: MedicosService,
    private DatasService: DatasService,
    private HorarioService: HorariosService

  ) { }
  especialidades: any = []
  medicos: any = []
  datas: any = []
  horario: any = []
  idMedico: any 
  
  ngOnInit(): void {
    this.EspecialidadesService.listEspecialidades().subscribe( (dataEspecialidades: any) => {
        dataEspecialidades.results.forEach((element:any) => {
        this.especialidades.push({value: element.id, label: element.nome})
      });
      // console.log(this.especialidades)      
    });  
  }

  cancelConsulta(){
    this.router.navigate(["consultas"])
  }

  getMedicobyEspecialidade(id:number) {
    this.medicos = []
     this.MedicosService.listMedicosbyEspecialidade(id).subscribe((dataMedicos: any )=> {
      dataMedicos.results.forEach((element:any )=> {
        this.medicos.push({value: element.id, crm:element.crm, label: element.nome})
      });
      console.log(this.medicos)
    });    
  } 

  getDatasbyMedicos(id:number) {
    this.datas = []
    this.idMedico = id
    this.DatasService.listDatasbyMedicos(id).subscribe((resultDatas: any)=>{
      resultDatas.results.forEach((element:any) => {
        
        this.datas.push({value: element.dia})
      });
      console.log(this.datas,this.idMedico)
    })
  } 

  getHorarioByDatas(id:number, dia:string){
    this.horario = []
    this.HorarioService.listHorariosByDatas(id,dia).subscribe((resultHorario: any)=>{
      resultHorario.results.forEach((element: any)=>{
        element.horarios.forEach((element2: any) => {
          this.horario.push({value:element2})
        });
      });
      console.log(this.horario)
    })
  }

}
