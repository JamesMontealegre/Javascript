// Ambas sirven para declarar variables
// var es una forma antigua de variables
// Aun es vigente el uso de var para conservar la compatibilidad con muchos navegadores

// Reemplaza o sobreescribe objetos globales de window

var b = 10;

let a = 10,
  d = 40,
  e = 50;

const c = 10;

console.table({ a, b, c, d, e });

// una variable precedida de un número no se puede declarar
// let 1abc = 1234

// tampoco con un dot
// let precio99.99 = 99

// Siempre usar nombres significativos para el nombramiento de variables.

// El estándar es:

// * lower camel case para nombre de variables.
// * Upper camel case, que es que empiece con mayúscula. Y todas las palabras empiezan con mayúscula para los nombres de classes.
// * Usar el under o guion bajo únicamente para separar números.
// * Y recuerden que pueden poner símbolo de dólar o inicializar con guión bajo
