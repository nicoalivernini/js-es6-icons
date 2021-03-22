// Si scriva una funzione che accetti tre argomenti,
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

// Prima soluzione

// const myFunction = (array, a, b) => {
//   const newArray = array.slice(a, b + 1);
//   return newArray;
// }
//
// const myArray = [1,2,3,4,5,6,7,8,9];
//
// let result = myFunction(myArray, 1, 5);
//
// console.log(result);


//Seconda soluzione

const numeri = [1,2,3,4,5,6,7,8]

const myNewFunction = (array, a, b) => {
  const arrayFilter = array.filter((element, index, array) => {
    return index >= a && index <= b
  });
  return arrayFilter;
}

console.log(myNewFunction(numeri, 1, 5));
