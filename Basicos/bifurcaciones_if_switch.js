//Bifurcacion if ... else
let saldo = 20;
let gastos = 10;

if (saldo < gastos){
    console.log("Estas en quiebra");
}else{
    console.log("Todo esta perfecto");
}


// If else + if else
let nota = 3;
if (nota == 3){
console.log("Excelente nota!");
}else if (nota == 2){
console.log("Podrias hacerlo mejor");
}else if (nota == 1){
console.log("Tendras que repetir la materia");
}else{
console.log("Solo se permiten notas del 1 - 3");
}


// Sentencia Switch
let calif = 5;

switch(calif){
    case 5:
        console.log("Excelente Calificacion");
        break;
    case 4:
        console.log("Muy buen trabajo");
        break;
    case 3:
        console.log("Podrias hacerlo mejor");
        break;
    case 2:
        console.log("Mal");
        break;
    case 1:
        console.log("Pesimo");
        break;
    default:
        console.log("Error");
        break;
        
}   

// Comparaciones

//Igualdad 
let a = 5;
let b = 5;

// == compara el valor
if (5 == 5){
    console.log("a es igual a b - Debil");
}

// == compara el valor y el tipo
if (a === b){
    console.log("a es igual a b - Fuerte");
}

if (a != b){
    console.log("a no es igual a b, Debil");
}

if (a !== b){
    console.log("a no es igual a b, Fuerte");
}

//Bucle For
for (let i = 0; i < 10; i+=3){
    console.log(i);
}

let lista = [1,2,3,4,5];
for (let i = 0; i < lista.length; i++){
    console.log(lista); // lista[i] --> Escribira el dato del indice
}

// Estructura for...of
for (let valor of lista){
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor =>{
    console.log(valor);
})


// Estructura for...in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 30,
    isDeveloper: true
}

for (let propiedad in persona){
    console.log(propiedad); // retorna las propiedades [nombre, apellido, edad, isDeveloper]
    console.log(persona[propiedad]); //retorna los valores de las propiedades [Gorka, Villar, 30, true]
}

// Bucles While
let x = 0;
let max = 10;

while (x < max){
    console.log(x);
    x++;
}

let z = 0;

do{
    console.log("numero "+ z);
    z++;
} while (z < max)


// Casos muy especificos - break, continue
let list = [10,11,12,13];

for (let i=0; i < list.length; i++){

    if (list[i] === 11){
        continue;
    }

    console.log(list[i]);

    if (list[i] > 11){
        break;
    }
}

//labels
let unidades = 0;
let decenas = 0;

bucleDecenas: while (true){
    bucleUnidades: while (true){
        console.log(`El numero actual es:${decenas}${unidades}`);
        unidades++;
        if (unidades === 10){
            unidades = 0
            break bucleUnidades;
        }
        if (decenas === 2){;
            break bucleDecenas;
        }
    }
    decenas++
}
console.log("Ya hemos terminado")
 