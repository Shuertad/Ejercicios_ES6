/*Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const pos1 = 1;
const pos2 = 2;
array = [...fantasticFour]

const swap = (arr,pos1,pos2) => {
    if (arr.length < pos1 || arr.length < pos2) {
        return console.log('Posiciones no válidas para el tamaño del array!')
    } {
        const storeVar = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = storeVar;

        return arr;
    }
};

console.log(swap(array,pos1,pos2))