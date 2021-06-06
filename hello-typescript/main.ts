var minhavar = 'minha varavel';

function minhafunc (x, y){
    return x + y;
}

//ec6 ou es 2015

let num = 2;
const pi = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor * 2;
})

numeros.map(valor => valor * 2); //ec6, é o mesmo codigo que o de cima, mas com o es 2015, com isso o codigo fica menor e mais limpo,não precisando de tanta coisa. como nao precisa do nome function, nem do return.