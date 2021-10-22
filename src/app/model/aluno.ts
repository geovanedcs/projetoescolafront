import {Notas} from "./notas";

export class Aluno {
  nome: string;
  faltas: number;
  notas: Notas[];

  constructor(nome: string, faltas: number, notas: Notas[]) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }

}
