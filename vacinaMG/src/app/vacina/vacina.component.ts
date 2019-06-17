import { VacinaService } from './vacina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {
  vacinasAplicadas: any;
  vacinasNaoAplicadas: any;
  myCheck: boolean;
  colorToggle: any;

  constructor(private vacinaservice: VacinaService) { }

  ngOnInit() {
   this.vacinasAplicadas = this.vacinaservice.getVacinasAplicadas();
   this.vacinasNaoAplicadas = this.vacinaservice.getVacinasNaoAplicadas();
    // this.vacinaservice.listar().subscribe(dados => this.vacina = dados);
   this.colorToggle = 'white';
  }
  getCheck() {
    this.myCheck = !this.myCheck;
  }
  getVacina() {
    return 'ok';
  }

}
