function uncurry(fn) {
 return (...args) => { 
  let result = fn
  let count = 0
  while(typeof result() === 'function'){
   result = result(args[count])
   count++
  }
  return result(args[count])
  }
}
const sum = a => b => c => a + b + c;
const plainSum = uncurry(sum);

console.log(sum(1)(2)(3)); // 6
console.log(plainSum(1, 2, 3)); // 6