function span(arr, predicate) {
  var i = 0;
  while (i < arr.length && predicate(arr[i])) {
     i++;
  }
  return [arr.slice(0, i), arr.slice(i)];
}
