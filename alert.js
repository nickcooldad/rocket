function fibonacciGenerator() {
  let count = 0
  let fibonacciArr = [0, 1]
  return () => {
    if(count > 1) {
      fibonacciArr.push(fibonacciArr[count - 1] + fibonacciArr[count - 2])
    }
    return fibonacciArr[count++]
  }
}
const gen = fibonacciGenerator();

console.log(gen()); // 0
console.log(gen()); // 1
console.log(gen()); // 1
console.log(gen()); // 2
console.log(gen()); // 3
console.log(gen()); // 5
console.log(gen()); // 8
console.log(gen()); // 13
console.log(gen()); // 21
console.log(gen()); // 34