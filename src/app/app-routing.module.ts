import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./listagem/listagem.component";
import {JoseComponent} from "./jose/jose.component";
import {MariaComponent} from "./maria/maria.component";
import {PedroComponent} from "./pedro/pedro.component";

const routes: Routes = [{ path: 'alunos', component: ListagemComponent},
  {path: 'alunos/jose', component: JoseComponent},
  {path: 'alunos/maria', component: MariaComponent},
  {path: 'alunos/pedro', component: PedroComponent},
  {path: 'bimestre/pedro', component: PedroComponent},]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
