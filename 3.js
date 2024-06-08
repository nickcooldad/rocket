// function sum(...args) {
//   return Promise.all(args).then(argsArray =>
//      argsArray.reduce((acc,item) => acc + item, 0))
// }
// function sum(...args){
//   return args.reduce(
//     (acc, item) => acc.then(value => item.then(value1 => value + value1)),
//     Promise.resolve(0)
//   )
// }
function sum(...args){
  if(args.length === 0){
    return Promise.resolve(0)
  } 

  const [first, ...rest] = args;
  return first.then(value1 => sum(...rest).then(value2 => value1 + value2))
}



const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise(resolve => resolve(3));

sum().then(console.log);            // 0
sum(p1).then(console.log);          // 1
sum(p1, p2).then(console.log);      // 3
sum(p1, p2, p3).then(console.log);  // 6
