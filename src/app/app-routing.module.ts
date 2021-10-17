import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Professor } from './entity/Professor';


const routes: Routes = [

  { path: 'adicionar', component: Professor }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
