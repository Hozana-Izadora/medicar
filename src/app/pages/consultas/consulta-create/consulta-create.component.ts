import { MedicosService } from './../../../services/medicos.service';
import { EspecialidadesService } from './../../../services/especialidades.service';
import { Component, OnInit } from '@angular/core';
import {
  ConfirmConsulta,
  Datas,
  Especialidades,
  Horarios,
  Medicos,
} from './consulta-create.model';
import { DatasService } from 'src/app/services/datas.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css'],
})
export class ConsultaCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private EspecialidadesService: EspecialidadesService,
    private MedicosService: MedicosService,
    private DatasService: DatasService,
    private HorarioService: HorariosService,
    private ConsultaService: ConsultasService
  ) {}
  especialidades: Especialidades[] = [];
  medicos: Medicos[] = [];
  datas: Datas[] = [];
  horario: Horarios[] = [];
  idMedico: any;

  idAgenda!: number;
  horaAgenda!: Date;

  ngOnInit(): void {
    this.EspecialidadesService.listEspecialidades().subscribe(
      (dataEspecialidades: Especialidades) => {
        dataEspecialidades.results.forEach((element) => {
          this.especialidades.push(element);
        });
      }
    );
  }

  cancelConsulta() {
    this.router.navigate(['consultas']);
  }

  getMedicobyEspecialidade(id: number) {
    this.medicos = [];
    this.MedicosService.listMedicosbyEspecialidade(id).subscribe(
      (dataMedicos: Medicos) => {
        dataMedicos.results.forEach((element) => {
          this.medicos.push(element);
        });
      }
    );
  }

  getDatasbyMedicos(id: number) {
    this.datas = [];
    this.idMedico = id;
    this.DatasService.listDatasbyMedicos(id).subscribe((resultDatas: Datas) => {
      resultDatas.results.forEach((element) => {
        this.datas.push(element);
      });
    });
  }

  getHorarioByDatas(id: number, dia: string) {
    this.horario = [];
    this.HorarioService.listHorariosByDatas(id, dia).subscribe(
      (resultHorario: Horarios) => {
        resultHorario.results.forEach((element: any) => {
          element.horarios.forEach((element2: any) => {
            this.horario.push(element2);
          });
        });
      }
    );
  }
  confirmConsulta() {
    this.ConsultaService.createConsulta(
      this.idAgenda,
      this.horaAgenda
    ).subscribe((dataConsulta: ConfirmConsulta) => {
      if (dataConsulta) {
        Swal.fire({
          icon: 'success',
          title: 'Consulta marcada!',
          confirmButtonColor: '#49b4bb',
        });
        this.router.navigate(['consultas']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro!',
          footer: 'Tente novamente ou contacte o suporte.',
        });
      }
    });
  }
}
