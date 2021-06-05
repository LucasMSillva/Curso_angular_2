import { Component } from "@angular/core";

//Dentro do component estamos passando metadados. OBS: angular é baseado em boas práticas da web.
@Component({
    selector: 'meu-primeiro-component', // nome  da tag do html que queremos criar.
    
    template:// como o nome já diz é o template html.
     `
    <p> meu primeiro component com angular 2!</p> 
    <br>
    <p>Aqui podemos usar o tamplate literal, que inves de ficar concatenando várias strings podemos usar a CRASE
    e assim tudo dentro vai ser uma string. </p>
    `
     //vamos colcoar agora o nosso component dentro do app.component.html
     //primeiro passo, ir no app.component e colocar a tag lá...
     //voltando vamos adicionar o export antes do class.
     //mas so isso nao é suficiente agora vamos declarar no modulo, no arquivo app.module.ts

})
export class MeuPrimeiroComponent { }