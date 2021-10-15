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
  dia: Date;
}
export interface Horarios {
  results: Horarios[];
  horarios: Date;
}
