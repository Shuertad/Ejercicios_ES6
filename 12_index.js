/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y 
un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array:*/
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

const text = 'Anakin';

console.log(findArrayIndex(mainCharacters,text));
