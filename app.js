"use strict";
/*let valor: number;
import { calcQuadrado } from './Func';
let i: number;

valor = 8;

if (valor >= 10){
    console.log("É maior ou igual a 10!");
}else{
    if(valor < 2){
        console.log("O valor é menor que 2!");
    }else{
        console.log("Número ficou entre 2 e 9");
    }
}

for (i = 0; i < 10; i++){
    console.log("O valor do contador é %d" , i);
}

i = 0;
while(i < 10){
    console.log("O valor do contador é %d" , i);
    i++;

}

i = 0;
do{
    console.log("O valor do contador é %d" , i);
    i++;
}while(i < 10);*/
exports.__esModule = true;
var Func_1 = require("./Func");
var x, y;
var teclado = require("prompt-sync")();
//let result: number;
console.log("Informe primeiro  valor: ");
x = teclado();
console.log("Informe o segundo valor: ");
y = teclado();
x = Number(x);
y = Number(y);
//result = calcQuadrado(5);
console.log((0, Func_1.calcSoma)(x, y));
