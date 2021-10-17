import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aluno } from './entity/Aluno';
import { Cliente } from './entity/Cliente';
import { Curso } from './entity/Curso';
import { Professor } from './entity/Professor';


const routes: Routes = [

  { path: 'adicionar', component: Professor },
  { path: 'adicionar', component: Cliente },
  { path: 'adicionar', component: Aluno },
  { path: 'adicionar', component: Curso }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
