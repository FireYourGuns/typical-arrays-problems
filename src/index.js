
exports.min = function min (array) {
  if (array == [] || !array) {
    return 0
  } ;
    array.sort((a, b) => (a - b));
    return array[0];
}

exports.max = function max (array) {
  if (array == [] || !array) {
    return 0
  }; 
    array.sort((a, b) => (b - a));
    return array[0];
}

exports.avg = function avg (array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
  
}
