import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { TurmasComponent } from './turmas/turmas.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'turmas', component: TurmasComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'professores', component: ProfessoresComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent }
];