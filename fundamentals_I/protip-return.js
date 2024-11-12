// Conventional option
function createPerson1(name, lastname) {
  return { name: name, lastname, lastname };
}

// With arrow include a () if you want to remove return statement
const createPerson = (name, lastname) => ({ name, lastname });

// Si quiere obtener todos los argumentos de una función
function functionArguments() {
  console.log(arguments);
}

functionArguments("hola", "mundo", true, false);

// Lo mismo pero con una arrow function, ... se crea un nuevo arreglo con los argumentos
// Despues del parametro no puede haber otro parametro
// Si hay alguno adicional debe ir al inicio

const functionArguments2 = (...args) => args;

const [primero, segundo, tercero] = functionArguments2(
  "first",
  "second",
  "third"
);

console.log(primero, segundo, tercero);

const { lastname } = createPerson("James", "Montealgre");
console.log(lastname);

// Renombramiento de variable
const { lastname: newLastname } = createPerson("James", "Montealgre");
console.log(newLastname);

// Desestructuración de objetos literales

let Tony = {
  name: "Tony Stark",
  codeName: "Ironman",
  alive: false,
  age: 40,
};

// Sin desustructuración
const printProperties = (character) => {
  console.log(character.name);
  console.log(character.codeName);
  console.log(character.alive);
  console.log(character.age);
};

printProperties(Tony);

// Con desustructuración
const printProperties2 = ({ name, codeName, alive, age }) => {
  console.log({ name });
  console.log({ codeName });
  console.log({ alive });
  console.log({ age });
};

printProperties2(Tony);
