 //Промисы - 15
 //1 - способ reduce 
//  function compose(fns) {
//   return (arg) => fns.reduceRight((acc, item) => acc.then(value => item(value)), Promise.resolve(arg))
//  } 

//2 - способ 
// function  compose(fns){
//     return (arg) => fns.reduceRight(async (acc, fn) => fn(await acc), Promise.resolve(arg))
//   } 
//3 - способ
//  function compose(fns){
//   if(fns.length === 0){
//     return (x) => Promise.resolve(x)
//   }
//   // const [first, ...rest] = fns
//   // const functRest = compose(rest)
//   // return (arg) =>  functRest(arg).then(value => first(value))
//   return (arg) =>fns.at(-1)(arg)
//     .then(value => compose(fns.slice(0, -1))(value))
//  }
//4 способ
function compose(fns){
  return async (arg) => {
    let innerArg = arg
    for(let i = fns.length - 1; i >= 0; i--){
      innerArg = await fns[i](innerArg)
    }
    return innerArg
  }
}

function compose(fns){
  return fns.reduceRight(
    (acc, fn) => x => acc(x).then(fn),
    async x => x,
  );
}


// плохая статья
// https://learn.javascript.ru/call-apply-decorators

// хорошая статья
// https://blog.logrocket.com/understanding-javascript-decorators/#function-decorators





const square = x => new Promise(r => setTimeout(r, 2000, x ** 2));
const divideBy5 = x => new Promise(r => setTimeout(r, 1500, x / 5));
const multiplyBy3 = x => new Promise(r => setTimeout(r, 500, x * 3));

const foo = compose([square, divideBy5, multiplyBy3]); 

console.time("xxx");
foo(10).then(value => {
  console.log(value);
  console.timeEnd("xxx");
});