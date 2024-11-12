// Objetivo de las funciones: Centralizar la logica de un procedimiento que se puede ejecutar varias veces

function sayHello() {
  console.log("Hi");
}

// Función aninónima, no puede ser reutilizada
const sayHello2 = function () {
  console.log("Hi");
};

// Arrow o lambda functions
const sayHelloArrow = () => {
  console.log("Hi");
};

const sayHelloArrow2 = (name) => {
  console.log("Hi " + name);
};

// Cuando una función no tiene un return explicito retorna undefined

// Todo aquello delante del return no se va a ejecutar

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Las funciones de flecha también son anónimas
const getRamdon = () => Math.random();
