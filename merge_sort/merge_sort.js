const merge = require('./merge');

// O (n log n) -> 100 item list in about 3000 operations
//                1000 times of log  of 1000 which equals 3000

/**
 * 1. Quebrar o array/list  na metade
 * 2. Repetir o processo em cada parta dos arrays
 */

//The Divide and conquer approach
function mergeSort(data){
  if(data.length < 2){
    return data;
  }

  let pontoMedio = Math.round(data.length / 2);
  return merge(
    mergeSort(data.slice(0, pontoMedio)),
    mergeSort(data.slice( pontoMedio))
  )
}

// [-5, 0, 2, 3,  5, 5, 6, 6, 8, 69, 70]
console.log(mergeSort([5,6,8,69,70,0,-5,6,3,2,5]))