let { array_length } = require("./heapSort");

function heap_root(input, i) {
  let node_left = 2 * i + 1;
  let node_right = 2 * i + 2;
  let max = i;

  if (node_left < array_length && input[node_left] > input[max]) {
    max = node_left;
  }

  if (node_right < array_length && input[node_right] > input[max]) {
    max = node_right;
  }

  if (max !== i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  let temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

module.exports = { heap_root, swap };
