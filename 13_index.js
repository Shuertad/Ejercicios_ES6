/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/

//import { findArrayIndex, mainCharacters } from "./12_index.js"; // no me ha dejado importarlo por el error: "SyntaxError: Cannot use import statement outside a module"

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  const findArrayIndex = (arr,txt) => {
      if (arr.includes(txt) === true) {
          return arr.indexOf(txt);
      } else {
          console.log('El array no contiene el texto buscado!')
              return; //Por qué me devuelve un undefined en el caso else si no debería estar evaluando nada, solo devolver el console.log?
      };
  };

const elementToEliminate = 'Anakin';
const indexToEliminate = findArrayIndex(mainCharacters,elementToEliminate);

mainCharacters.splice(indexToEliminate,1)

console.log(mainCharacters);