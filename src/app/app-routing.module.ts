import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aluno } from './entity/Aluno';
import { Cliente } from './entity/Cliente';
import { Curso } from './entity/Curso';
import { Professor } from './entity/Professor';
import { Turma } from './entity/Turma';


const routes: Routes = [

  { path: 'adicionar', component: Professor },
  { path: 'adicionar', component: Cliente },
  { path: 'adicionar', component: Aluno },
  { path: 'adicionar', component: Curso },
  {path: 'adicionar', component: Turma}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
