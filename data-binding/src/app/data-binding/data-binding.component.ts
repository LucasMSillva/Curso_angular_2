import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlimage = 'http://lorempixel.com/400/200/sports/';


  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor(){
    return 6;
  }

  getCurtiCurso(){
    return true;
  }

  botaoClicado(){
    alert('Seu curioso hahahaha!')
  }

  onKeyUp(evento:KeyboardEvent){
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;

  }

  nome: string ="1-";

  pessoa: any = {
    nome: 'lucas',
    idade: 20,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
