// Tipos primitivos


// Number
4;

// String
"Hola mundo";
'Hola mundo';

// booleanos
true;
false;

// nulo y undefined
null;
undefined;

/* ---------- Ahora siguen las variables ---------- */

var variable;
let variablesLet;

// const constante;


// Declaracion de la variable
var a = 1; 


// Typeof indica el tupi del dato como el type de python
console.log(typeof a);


/* ---------- Ahora sigue la Notacion ---------- */

// ; --> Delimitar el final de una linea

// . --> Se utiliza en los objetos para acceder a los atributos

// [] --> Listas , arreglos o arrays
const ar = [1,2,3]
const lista = new Array(2, "hola", undefined, null);
lista[0] = "Soy el primer dato"

// () --> Funciones
function suma(a,b){
   //codigo a ejecutar
}

// {} -->  objetos, funciones y estructuras de control
const movil = {
    anchura: 5,
    altura: 10
}
console.log(movil.altura)

if (true){
    //Codigo dentro de la llave
}

// Fechas --> Necesita libreria de apoyo Moment.js
const ahora = new Date();
console.log(ahora)

const fecha_milis = new Date(10);
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15 );
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const año = ahora.getFullYear()

console.log(dia, mes, año)