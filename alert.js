async function run(fns, limit) {
  let cache = []
   for(let i = 0; i <= fns.length; i += limit){
    let functionResult = await Promise.all(fns.slice(i, i + limit).map(async fn => await fn()))
    cache.push(...functionResult)
   }
  return Promise.resolve(cache)
}


const fn1 = () => new Promise(r => setTimeout(r, 3400, "a"));
const fn2 = () => new Promise(r => setTimeout(r, 600, "b"));
const fn3 = () => new Promise(r => setTimeout(r, 2000, "c"));
const fn4 = () => new Promise(r => setTimeout(r, 1400, "d"));
const fn5 = () => new Promise(r => setTimeout(r, 1800, "e"));
const fn6 = () => new Promise(r => setTimeout(r, 400, "f"));
const fn7 = () => new Promise(r => setTimeout(r, 400, "f123"));

run([fn1, fn2, fn3, fn4, fn5, fn6, fn7], 2).then(arr => {
  console.log(arr); // arr === ["a", "b", "c", "d", "e", "f"]
});

