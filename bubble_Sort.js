//Bubble sort -> Implementação
let array01 = [];

//Inserir no vetor numeros aleatórios com n elementos.
function insereNoVetor(array ,numeroDeElementos){
    for(x = 0; x < numeroDeElementos; x++){
        array.push(Math.floor(Math.random() * (1000 - 0) + 1));
    }
    return array;
}
//cahamda da função para inserção, é um método destrutivo.
insereNoVetor(array01, 15)

function trocaValor(vetor, a, b){
    let aux = vetor[a];
    vetor[a] = vetor[b];
    vetor[b] = aux;
    return vetor;
}
// -- Bubble Sort ---
function ordenaVetor(array){
    const tamanhoVetor = array.length;
    for(let i = 0; i < tamanhoVetor; i++){
        for(let j = 0; j < tamanhoVetor - 1; j++){
            if(array[j] > array[j + 1]){
               trocaValor(array, j, j + 1);
            }
        }
    }    
    return array; 
}

console.log(ordenaVetor(array01))