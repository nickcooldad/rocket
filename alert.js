function reduce(array, callback, initialValue) {
  //initialValue ??= array[0]
  for(let i = 0; i < array.length; i++){
    if(!initialValue){
      initialValue = callback(initialValue = array[])
    }
    initialValue = callback(initialValue, array[i], i, array)
  }
  return initialValue
}


console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// 10

console.log(reduce([], (a, b) => a + b, 0));
// 0

console.log(reduce([], (a, b) => a + b));
// TypeError: Reduce of empty array with no initial value

console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), {}));
// { "c": { "b": { "a": {} } } }

console.log(reduce(["a", "b", "c"], (a, b) => ({ [b]: a })));
// { "c": { "b": "a"} }