/*Crea los siguientes archivos JS:

- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break*/


let x = 1;
let max = 10

for (let i = max; i!=1; i--){
    console.log(x *= i);
}

let x_1 = 1;
let max_1 =10;
while (max_1 !=1){
    x_1*= max_1
    max_1--
    console.log(x_1);
}


let x_2 = 1;
let max_2 = 10;

while (max_2 !=1){
    if (max_2 === 1){
        break;
    }
    else{
        x_2*=max_2
        max_2 --
        console.log(x_2)
    }
}