// Strings - cadenas de caracteres
let str = "Hola soy un texto";
let str_sng = "Hola soy un texto con comillas simples";

// Comillas invertidas
let str_backticks = `Esto es un string con backticks`;
let nombre = "Brian";
let saludo = `Hola, ${nombre}`;

console.log(saludo);

// Plantillas HTML
let plantilla = `
<html> 
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`;
console.log(plantilla);

// Introduccion de variables en HTML
let libros = [
  "Empieza por el por que",
  "El monje que vendio su ferrari",
  "El poder del ahora",
];

// Metodods mas utilizados con caracteres
// Obtener la longitud de un string
let str1 = "Hola soy un string";
console.log(str1.length);

//Obtener partes de cadenas de caracteres
//slice(), substring(), substr()
let slice_str = str1.slice(0, 10);
console.log(slice_str);

let substring_str = str1.substring(5, 10);
console.log(substring_str);

// Reemplazar parte del contenido de una cadena de texto --> Solo reemplaza la primera instancia
let cadena = "Brian es grande";
console.log(cadena.replace("Brian", "Jose"));

// Reemplazar parte del contenido de una cadena de texto --> reemplaza todas las intancias [Expresion regular /g (global)]
console.log(cadena.replace(/a/g, "x"));

// Metodos de cadenas de texto (Parte 2)  --> toLowercase(), toUppercase()
let input = "eScorPion";
console.log(input.toLowerCase());

// Formas de concaternar Strings
let st1 = "Primera";
let str2 = "Parte";

console.log(st1.concat(" ", str2));
console.log(st1 + " " + str2);
console.log(`${st1} ${str2}`);

// Eliminar espaciosal inicio y al final --> trim(), trimStart(), trimEnd()
let str_3 = "Hola soy un string con espacio al final. ";
console.log(str_3.trim());

// Obtener caracter que hay en cierta posicion --> charAt()
let str_4 = "Hola soy un numero";
console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres --> indexOf(),
let str_5 = "Esto es una tabla de surf de una tienda";
console.log(str_5.indexOf("una"));
console.log(str_5.charAt(5));
console.log(str_5.lastIndexOf("una"));

// Metodo de cadenas de Texto
let texto_largo = "Habia una vez un mono que colgaba de un arbol pero estaba tan cansado que se durmio, al dormir el mono desafortunadamente cayo desde gran altura y termino golpeandose la cabeza";

console.log(texto_largo.match(/un/g));

// Existe la palabra dentro de una cadena
console.log(texto_largo.includes("vez"));

// Saber si un texto empieza por una palabra
console.log(texto_largo.startsWith("iguana"));

// Saber si un texto termina por una palabra
console.log(texto_largo.endsWith("cabeza"));