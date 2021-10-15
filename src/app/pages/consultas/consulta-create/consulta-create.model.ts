export interface Especialidades {
  id: number;
  nome: string;
  results: Especialidades[];
}
export interface Medicos {
  id: number;
  crm: number;
  nome: string;
  results: Medicos[];
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