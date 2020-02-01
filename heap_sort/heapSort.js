const { heap_root, swap } = require("./maxHeap");

var array_length;

function heapSort(input) {
  array_length = input.length;

  for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    array_length--;

    heap_root(input, 0);
  }
}

module.exports = { array_length, heapSort };
