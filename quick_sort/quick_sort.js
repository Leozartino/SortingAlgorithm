function quickSort(data){
  if(data.length < 1){
    return [];
  }
  const left = [];
  const right = [];
  let pivot = data[0];

  for (let i = 1; i < data.length; i++ ){
    if(data[i] < pivot){
      left.push(data[i])
    }
    else {
      right.push(data[i])
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}


console.log(quickSort([2,6,-9,0,5,3,78,5,6]))