function primeGenerator() {
  let num = 2
  return () => {
    while(!isPrime(num)){
     num++
     }
     return num++
  }
}


function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}


const gen = primeGenerator();

console.log(gen()); // 2
console.log(gen()); // 3
console.log(gen()); // 5
console.log(gen()); // 7
console.log(gen()); // 11
console.log(gen()); // 13
console.log(gen()); // 17
console.log(gen()); // 19
console.log(gen()); // 23
console.log(gen()); // 29