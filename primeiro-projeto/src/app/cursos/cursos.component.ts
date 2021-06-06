import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'curso-component',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(public cursosService: CursosService) { 

    this.nomePortal = 'http:// loiane.training';
    
    //var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();

  }

  ngOnInit(): void {
  }

}
