export interface Especialidades {
  results: Especialidades[];
  id: number;
  nome: string;
}
export interface Medicos {
  results: Medicos[];
  id: number;
  crm: number;
  nome: string;
  especialidade: Especialidades[];
}
export interface Datas {
  results: Datas[];
  id: number;
  dia: Date;
}
export interface Horarios {
  results: Horarios[];
  id:number;
  horarios: Date;
}
export interface ConfirmConsulta{
  id: number;
  dia: Date;
  horario: Date;
  data_agendamento: Date;
  medico: Medicos[];
}