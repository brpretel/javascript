/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

let altura = 165;
let alt_metros = parseFloat(altura/100);
let peso = parseFloat(59.1);

let max_alt = Math.ceil(alt_metros);
let min_alt = Math.floor(alt_metros);

let max_peso = Math.ceil(peso);
let equals = Number.MAX_VALUE == Number.MAX_VALUE+1;
