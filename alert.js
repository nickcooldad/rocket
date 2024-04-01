function memo(fn) {
  const cache = new Map();
  return function(...arg) {
      const key = collecting(arg)
    if (!cache.has(key)) {
      cache.set(key, fn(...arg));
    }

    return cache.get(key);
  };
}

const collecting = (args) => {
  if (Array.isArray(...args)){
      return args.join(';')
  }
  if ( typeof args[0] === 'number'){
      return +args.join('')
  }
  if (typeof args[0] === "bigint"){
      return args[0].toString()
    }
  if(args[0] !== null && typeof args[0] !== 'function' && typeof args[0] === 'object'){
    const serializedObj = JSON.stringify(myObj, (key, value) => {
      if (typeof value === 'bigint') {
        return value.toString();
      } else {
        return value;
      }
    });
  } else {
      return args.join('')
  }
}
//Допустим, у нас есть чистая функция, которая считает сумму аргументов. Но работает она долго.

// function sum(a, b) {
//   // холостой цикл на миллиард шагов
//   // занимает примерно секунду
//   for(let i = 0; i < 1e9; i++);
//   return a + b;
// }

// sum(2, 3) === 5 // ≈ 1s
// //Ваша задача реализовать функцию-декоратор memo:

// const mSum = memo(sum);

// console.log(mSum(1, 1) === 2) // ≈ 1s
// console.log(mSum(1, 1))
// console.log(mSum(1, 1) === 2) // ≈ 0.001s
// console.log(mSum(2, 4) === 6) // ≈ 1s
// console.log(mSum(1, 1) === 2) // ≈ 0.001s
// console.log(mSum(2, 4) === 6) // ≈ 0.001s

// //Функция то функция fn (аргумент memo) может принимать произвольное количество аргументов. Аргументы могут быть любого типа. Например, числа, строки, объекты или функции.

// //Может быть и такая функция:

const sum = (...args) => args.reduce((a, b) => a + b, 0);
const mSum = memo(sum);

console.log(mSum(1, 1) === 2) // ≈ 1s
console.log(mSum(1, 1)) // ≈ 1s
console.log(mSum(2, 4) === 6)// ≈ 1s
console.log(mSum(2, 4))// ≈ 1s
console.log(mSum(1, 1) === 2) // ≈ 0.001s
console.log(mSum(1, 1)) // ≈ 0.001s
console.log(mSum(1) === 1) // ≈ 1s
console.log(mSum(1)) // ≈ 1s
console.log(mSum(2, 4) === 6) // ≈ 0.001ss
console.log(mSum(2, 4)) // ≈ 0.001ss
console.log(mSum(1) === 1) // ≈ 0.001s
console.log(mSum(1)) // ≈ 0.001s
