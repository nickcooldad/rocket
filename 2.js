// async function run(fns, limit) {
//   let cache = []
//    for(let i = 0; i < fns.length; i += limit){
//     let functionResult = await Promise.all(fns.slice(i, i + limit).map(fn => fn()))
//     cache.push(...functionResult)
//     // cache.push(functionResult)
//    }
//   return cache
// }  

// const p1 = new Promise(resolve => resolve(1));
// const p2 = new Promise(resolve => resolve(2));
// const p3 = new Promise(resolve => resolve(3));

// sum(p1, p2, p3).then((val) => console.log(val))
// return fns[0]().then(x => sum += x)
//   .then(() => fns[1]().then(x => sum += x))
//   .then(() => fns[2]().then(x => sum += x))
//   .then(() => fns[3]().then(x => sum += x))
//   .then(() => fns[4]().then(x => sum += x))
//   .then(() => sum);


//         length === 6 limit === 2
function run(fns, limit) {
  let cache = []
  
  let p = Promise.resolve();
  for(let i = 0; i < fns.length; i += limit){
    p = p.then(() => Promise.all(fns.slice(i, i + limit).map(fn => fn()))).then(arr => cache.push(...arr))
  }
  return p.then(() => cache);
}


  // p = p.then(() => Promise.all(fns.slice(0, 2).map(fn => fn())).then(arr1 => cache.push(...arr1)))
  // p = p.then(() => Promise.all(fns.slice(2, 4).map(fn => fn())).then(arr2 => cache.push(...arr2)))
  // p = p.then(() => Promise.all(fns.slice(4, 6).map(fn => fn())).then(arr3 => cache.push(...arr3)))


  



// async function foo() {
//   const a = await fa();
//   const b = await fb(a);
//   const c = await fc(b);
//   return c;
// }

// async function foo() {
//   return fa().then(a => {
//     return fb(a).then(b => {
//       return fc(b).then(c => {
//         return c + 1;
//       });
//     });
//   });
// }

const fn1 = () => {
  console.log("fn1");
  return new Promise(r => setTimeout(r, 3400, "a"));
}
const fn2 = () => {
  console.log("fn2");
  return new Promise(r => setTimeout(r, 600, "b"));
}
const fn3 = () => {
  console.log("fn3");
  return new Promise(r => setTimeout(r, 2000, "c"));
}
const fn4 = () => {
  console.log("fn4");
  return new Promise(r => setTimeout(r, 1400, "d"));
}
const fn5 = () => {
  console.log("fn5");
  return new Promise(r => setTimeout(r, 1800, "e"));
}
const fn6 = () => {
  console.log("fn6");
  return new Promise(r => setTimeout(r, 400, "f"));
}


run([fn1, fn2, fn3, fn4, fn5, fn6], 2).then(arr => {
  console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});
