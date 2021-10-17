import { Component, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../entity/Cliente';
import { ClienteService } from '../Service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();



  constructor(private router: Router, private service: ClienteService) { }




  ngOnInit(): void {

  
  }

  addCliente(){
   this.service.addCliente(this.cliente)
    .subscribe(data =>{
      alert('cliente adicionado');
      this.router.navigate(["cliente"]);
    })


  }

}
