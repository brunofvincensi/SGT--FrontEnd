import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Turma } from '../entity/Turma';
import { TurmaService } from '../Service/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styles: []
})
export class TurmaComponent implements OnInit {

  listaTurma: Turma[];

  turma: Turma = new Turma();



  constructor(private router: Router, private service: TurmaService) { }




  ngOnInit(): void {
    this.service.getTurma()
    .subscribe(data => {
      this.listaTurma = data;
    })

  
  }

  addTurma(){
   this.service.addTurma(this.turma)
    .subscribe(data =>{
      alert('turma adicionada');
      this.router.navigate(["cliente"]);
    })


  }

}
