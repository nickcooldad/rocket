async function run(fns, limit) {
  const results = new Array(fns.length)
  const cache = new Set()

  for (let i = 0; i < fns.length; i++) {
    const promiseFn = fns[i]()
    cache.add(promiseFn)
    promiseFn.then(value => {
      results[i] = value
      cache.delete(promiseFn)
    })
    if (cache.size >= limit) {
      await Promise.race(cache)
    }
  }
  await Promise.all(cache)
  return results
}



function run(fns, limit) {
  const { promise, resolve } = Promise.withResolvers();

  const results = [];
  let started = 0;
  let finished = 0;

  function helper() {
    if (finished === fns.length) {
      resolve(results);
      //  console.log("FINISHED", results)
    }
    if (started === fns.length) {
      return;
      
    }
    const i = started;
    started++;
    fns[i]().then((value) => {
      results[i] = value;
      finished++;
      helper();
    });
  }

  for (let i = 0; i < limit; i++) {
    helper();
  }

  return promise;
}

//  https://i.redd.it/sqv8b61ffod61.jpg

// async function run(fns, limit) {
//   const results = []
//   let i = 0

//   async function runer() {
//     while (i < fns.length) {
//       const currentIndex = i++
//       const result = await fns[currentIndex]()
//       results[currentIndex] = result
//     }
//   }

//   const runners = Array.from({ length: limit }, () => runer())
//   await Promise.all(runners)
//   return results
// }

// fns.length === 5;
// limit === 3

// function run2(fns, limit) {
//   const results = new Array(fns.length)
//   const cache = new Set()

//   const promiseFn0 = fns[0]();
//   cache.add(promiseFn0);
//   promiseFn0.then((value) => {
//     results[0] = value;
//     cache.delete(promiseFn0);
//   })
//   const promiseFn1 = fns[1]();
//   cache.add(promiseFn1);
//   promiseFn1.then((value) => {
//     results[1] = value;
//     cache.delete(promiseFn1);
//   })
//   const promiseFn2 = fns[2]();
//   cache.add(promiseFn2);
//   promiseFn2.then((value) => {
//     results[2] = value;
//     cache.delete(promiseFn2);
//   })

//   return Promise.race(cache).then(() => {
//     const promiseFn3 = fns[3]();
//     cache.add(promiseFn3);
//     promiseFn3.then((value) => {
//       results[3] = value;
//       cache.delete(promiseFn3);
//     })
//     return Promise.race(cache).then(() => {
//       const promiseFn4 = fns[4]();
//       cache.add(promiseFn4);
//       promiseFn4.then((value) => {
//         results[4] = value;
//         cache.delete(promiseFn4);
//       })
//       return Promise.all(cache).then(() => {
//         return results;
//       })
//     })
//   })
// }

// const asyncFn = x => Promise.resolve(x * 2);

// async function foo() {
//   let x = 1;
//   x++;
//   if (x > 0) {
//     x++;
//   }
//   x = await asyncFn();
//   x++;
//   return x;
// }


const fn1 = () => new Promise(r => setTimeout(r, 3400, "a"));
const fn2 = () => new Promise(r => setTimeout(r, 600, "b"));
const fn3 = () => new Promise(r => setTimeout(r, 2000, "c"));
const fn4 = () => new Promise(r => setTimeout(r, 1400, "d"));
const fn5 = () => new Promise(r => setTimeout(r, 1800, "e"));
const fn6 = () => new Promise(r => setTimeout(r, 400, "f"));

console.time('a')
run([fn1, fn2, fn3, fn4, fn5, fn6], 2)
  .then(arr => {
    console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
    console.timeEnd('a')
  });

