import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../entity/Aluno';
import { AlunoService } from '../Service/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styles: []
})
export class AlunoComponent implements OnInit {

  listaAluno: Aluno[];

  aluno: Aluno = new Aluno();



  constructor(private router: Router, private service: AlunoService) { }




  ngOnInit(): void {
    this.service.getAluno()
    .subscribe(data => {
      this.listaAluno = data;

    })

  
  }


  

  addAluno(){
    this.service.addAluno(this.aluno)
    .subscribe(data =>{
      alert('aluno adicionado');
      this.router.navigate(["aluno"])




    })




  }


  

}
