const array01 = [];

function insertToArray(array ,numberOfElements){
    for(x = 0; x < numberOfElements; x++){
        array.push(Math.floor(Math.random() * (1000 - 0) + 1));
    }
    return array;
}

insertToArray(array01, 15)

function swapValue(vetor, a, b){
    let aux = vetor[a];
    vetor[a] = vetor[b];
    vetor[b] = aux;
    return vetor;
}
// -- Bubble Sort ---
function BubbleSort(array){
    const ArrayLength = array.length;
    for(let i = 0; i < ArrayLength; i++){
        for(let j = 0; j < ArrayLength - 1; j++){
            if(array[j] > array[j + 1]){
               swapValue(array, j, j + 1);
            }
        }
    }    
    return array; 
}

console.log(BubbleSort(array01))