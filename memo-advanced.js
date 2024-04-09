const search = (array1, array2) =>  array1.length === array2.length && array1.every((_, index) => array1[index] === array2[index])


function memo(fn) {
  const cache = []
  return function(...args) {
    const objRes = cache.find((item) => search(item.args, args))
    if(objRes === undefined){
      const result = fn(...args)
      cache.push({ args, result })
      return result;
    } 
    return objRes.result
    }
  }


const foo = (...args) => {
  console.log("===")
  let d = Date.now();
  while(Date.now() - d < 500);
  return args.reduce((a, b) => a + b);
}

const mfoo = memo(foo);

console.time(1)
console.log(mfoo(1, 2) === 3)
console.timeEnd(1)

console.time(2)
console.log(mfoo("a", "b", "c") === "abc")
console.timeEnd(2)

console.time(3)
console.log(mfoo(1, 2) === 3)
console.timeEnd(3)

console.time(4)
console.log(mfoo(1, 2, 3) === 6)
console.timeEnd(4)

  // cache = [
  //   {args: [1, 2], result: 3},
  //   {args: ["a", "b", "c"], result: "abc"},
  //   {args, result},
  //   {args, result},
  // ]
  

  // Array.isArray(7, "jhui", [8,9,0])
  
 

  // const foo = (arr) => arr.map(x => typeof x);

  // const mfoo = memo(foo);

  // // console.log(mfoo([1]));
  // // console.log(mfoo(["1"]));

  // const bar = (obj) => Object.keys(obj);

  // const mbar = memo(bar);


  // const o1 = {a: 1}
  // const o2 = {a: 1}

  
  // mbar(o1) !== mbar(o2); 
  // mbar(o1) === mbar(o1); 
