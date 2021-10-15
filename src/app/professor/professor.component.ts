import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from '../entity/Professor';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styles: []
})
export class ProfessorComponent implements OnInit {

  professor: Professor = new Professor();

  listaProfessor: Professor[] | undefined;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getProfessor()
    .subscribe(data => {
      this.listaProfessor = data
    })
  }

  addProfessor(){
    this.service.addProfessor(this.professor)
    .subscribe(data =>{
      alert('Sucesso');
      this.router.navigate(["professor"]);
    })


  }

}