function merge(left, right){
  const out = [];

  while(left.length && right.length){
    out.push(left[0] < right[0] ? left.shift(): right.shift());
  }

  while(left.length){
    out.push(left.shift());
  }
  while(right.length){
    out.push(right.shift());
  }

  return out;
}

module.exports = merge;