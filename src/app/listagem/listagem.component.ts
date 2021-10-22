import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno'

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  aluno: Aluno[] = [];
  cols: any[] = [];
  rowData: any[] =[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'nota1b', header: 'Nota B1' },
      { field: 'nota2b', header: 'Nota B2' },
      { field: 'nota3b', header: 'Nota B3' },
      { field: 'nota4b', header: 'Nota B4' },
      { field: 'faltas', header: 'Faltas' }
    ];

    this.rowData = [
      {field: 'nome', }
    ]
  }

}
