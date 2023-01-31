// Sesion 5 - Numbers
// Declaracion de variables numericas (enterios y con decimal)

let a = 0.5;
let b = 0.1;
let c = a+b;
console.log(c);

// Principales operaciones aritmeticas 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// Representacion de los numeros a cadenas de texto 
let a_str = a.toString();
console.log(a_str, typeof(a_str));

// Redondeo de numeros decimales
let d = 3.3;
let e = d * 3;
console.log(e);
console.log(e.toFixed(1)); // Se le indica la cantidad de decimales que se quieren
console.log(e.toPrecision(5)); // Limita el numero de cifras significativas

// Operador .valueOf() - obtener valores numericos a partir de literales
let x = 2;
let z = new Number(3); // --> esto es un casting d eun numero , lo toma como numero normal pero en estado de test
let str_test = new String("Hola soy un String de prueba");
console.log(z);

// Nan - (Not a Number) - Infinity
let xx = Number("adias");
console.log(xx); // --> is a NaN , algo anda mal 
console.log(isNaN(xx)); // --> regresa true

let numerador = 19;
let divisor = 0;

console.log(numerador/divisor); // --> retorna infinity

// Como convertir los strings a valores numericos con Number, parseInt y parseFloat
let numero = "5.89";
let num2 = 17.2;
console.log(numero+num2); // --> entrega 5.8913.2 lo cual esta mal
console.log(Number(numero)+ num2); // --> entrega 23.09 lo cual esta bien
console.log(parseInt(numero)); // --> entero
console.log(parseFloat(numero)); // --> flotante

// Numeros Hexadecimales (Base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex));

// Obtener los valores maximo y minimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
