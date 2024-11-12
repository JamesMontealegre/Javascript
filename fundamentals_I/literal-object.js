let character = {
  name: "Tony Stark",
  codeName: "Ironman",
  alive: false,
  age: 40,
};

console.log("Nombre: ", character.name);
console.log("Nombre: ", character["name"]);

// Borra un parámertro del arreglo
delete character.age;

// Convierte la clave valor como un arreglo de dos elementos
const entriesPairs = Object.entries(character);

// Congela el objeto y no permite la modificación de sus propiedades
Object.freeze(character);

const properties = Object.getOwnPropertyNames(character);
const values = Object.values(character);
