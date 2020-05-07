module.exports = function swapValue(vetor, a, b){
  let aux = vetor[a];
  vetor[a] = vetor[b];
  vetor[b] = aux;
  return vetor;
}