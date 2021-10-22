import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedro',
  templateUrl: './pedro.component.html',
  styleUrls: ['./pedro.component.css']
})
export class PedroComponent implements OnInit {

  public estado: string= '';
  notaParticipacao: number = 0;
  notaTarefa: number = 0;
  notaTrabalho: number = 0;
  notaProva: number = 0;
  faltas: number = 0;
  notap1: number[] = [0.00, 0.00, 0.00, 0.00, 0];
  notap2: number[] = [0.00, 0.00, 0.00, 0.00, 0];
  notap3: number[] = [0.00, 0.00, 0.00, 0.00, 0];
  notap4: number[] = [0.00, 0.00, 0.00, 0.00, 0];


  constructor() { }

  ngOnInit(): void {
  }


  exibirEstado(): void{
    const m1 = parseFloat(this.mediap1());
    const m2 = parseFloat(this.mediap2());
    const m3 = parseFloat(this.mediap3());
    const m4 = parseFloat(this.mediap4());

    const mf = (m1 + m2 + m3 +m4)/4;
    console.log(mf)
    const tmp = this.notap1[4] + this.notap2[4] + this.notap3[4] + this.notap4[4];
    const frequencia = (((120 - tmp)/120)*100)
    frequencia.toFixed(2);

    if(mf >= 6 && frequencia >= 75){
      this.estado = 'Aprovado! media:' + mf + ' e frequencia:' + frequencia + '%';
    }else if(mf < 6 && mf >= 5 && frequencia >=75){
      this.estado = 'Recuperação! media:' + mf + ' e frequencia:' + frequencia + '%';
    }else {
      this.estado = 'Reprovado! media: ' + mf + ' e frequencia: ' + frequencia + '%';
    }

  }

  zeraNotas():void  {
    this.notaParticipacao = 0;
    this.notaTarefa = 0;
    this.notaTrabalho = 0;
    this.notaProva = 0;
    this.faltas = 0;
  }

  mediap1() {
    return ((this.notap1[0] * 0.15) + (this.notap1[1] * 0.25) + (this.notap1[2] * 0.3) + (this.notap1[3] * 0.3)).toFixed(2);
  }
  mediap2(){
    return ((this.notap2[0] * 0.15) + (this.notap2[1] * 0.25) + (this.notap2[2] * 0.3) + (this.notap2[3] * 0.3)).toFixed(2);
  }
  mediap3(){
    return ((this.notap3[0] * 0.15) + (this.notap3[1] * 0.25) + (this.notap3[2] * 0.3) + (this.notap3[3] * 0.3)).toFixed(2);
  }
  mediap4(){
    return ((this.notap4[0] * 0.15) + (this.notap4[1] * 0.25) + (this.notap4[2] * 0.3) + (this.notap4[3] * 0.3)).toFixed(2);
  }

  recuperaPT4(notaPT: Event): void {
    this.notaParticipacao = parseFloat((<HTMLInputElement>notaPT.target).value);
  }

  recuperaTarefa4(tarefa: Event) {
    this.notaTarefa = parseFloat((<HTMLInputElement>tarefa.target).value);
  }

  recuperaTrabalho4(trabalho: Event) {
    this.notaTrabalho = parseFloat((<HTMLInputElement>trabalho.target).value);
  }

  recuperaProva4(prova: Event) {
    this.notaProva = parseFloat((<HTMLInputElement>prova.target).value);
  }

  recuperaFaltas4(faltas: Event) {
    this.faltas = parseFloat((<HTMLInputElement>faltas.target).value);
  }

  calculaBimestre4() {
    this.notap4[0] = this.notaParticipacao;
    this.notap4[1] = this.notaTarefa;
    this.notap4[2] = this.notaTrabalho;
    this.notap4[3] = this.notaProva;
    this.notap4[4] = this.faltas;
    this.zeraNotas();
  }
  recuperaPT3(notaPT: Event): void {
    this.notaParticipacao = parseFloat((<HTMLInputElement>notaPT.target).value);
  }

  recuperaTarefa3(tarefa: Event) {
    this.notaTarefa = parseFloat((<HTMLInputElement>tarefa.target).value);
  }

  recuperaTrabalho3(trabalho: Event) {
    this.notaTrabalho = parseFloat((<HTMLInputElement>trabalho.target).value);
  }

  recuperaProva3(prova: Event) {
    this.notaProva = parseFloat((<HTMLInputElement>prova.target).value);
  }

  recuperaFaltas3(faltas: Event) {
    this.faltas = parseFloat((<HTMLInputElement>faltas.target).value);
  }

  calculaBimestre3() {
    this.notap3[0] = this.notaParticipacao;
    this.notap3[1] = this.notaTarefa;
    this.notap3[2] = this.notaTrabalho;
    this.notap3[3] = this.notaProva;
    this.notap3[4] = this.faltas;
    this.zeraNotas();
  }
  recuperaPT2(notaPT: Event): void {
    this.notaParticipacao = parseFloat((<HTMLInputElement>notaPT.target).value);
  }

  recuperaTarefa2(tarefa: Event) {
    this.notaTarefa = parseFloat((<HTMLInputElement>tarefa.target).value);
  }

  recuperaTrabalho2(trabalho: Event) {
    this.notaTrabalho = parseFloat((<HTMLInputElement>trabalho.target).value);
  }

  recuperaProva2(prova: Event) {
    this.notaProva = parseFloat((<HTMLInputElement>prova.target).value);
  }

  recuperaFaltas2(faltas: Event) {
    this.faltas = parseFloat((<HTMLInputElement>faltas.target).value);
  }

  calculaBimestre2() {
    this.notap2[0] = this.notaParticipacao;
    this.notap2[1] = this.notaTarefa;
    this.notap2[2] = this.notaTrabalho;
    this.notap2[3] = this.notaProva;
    this.notap2[4] = this.faltas;
    this.zeraNotas();
  }
  recuperaPT(notaPT: Event): void {
    this.notaParticipacao = parseFloat((<HTMLInputElement>notaPT.target).value);
  }

  recuperaTarefa(tarefa: Event) {
    this.notaTarefa = parseFloat((<HTMLInputElement>tarefa.target).value);
  }

  recuperaTrabalho(trabalho: Event) {
    this.notaTrabalho = parseFloat((<HTMLInputElement>trabalho.target).value);
  }

  recuperaProva(prova: Event) {
    this.notaProva = parseFloat((<HTMLInputElement>prova.target).value);
  }

  recuperaFaltas(faltas: Event) {
    this.faltas = parseFloat((<HTMLInputElement>faltas.target).value);
  }

  calculaBimestre() {
    this.notap1[0] = this.notaParticipacao;
    this.notap1[1] = this.notaTarefa;
    this.notap1[2] = this.notaTrabalho;
    this.notap1[3] = this.notaProva;
    this.notap1[4] = this.faltas;
    this.zeraNotas();
  }
}
