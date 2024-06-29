// async function run(fns, limit) {
//   const results = new Array(fns.length)
//   const cache = new Set()

//   for (let i = 0; i < fns.length; i++) {
//     const promiseFn = fns[i]()
//     cache.add(promiseFn)
//     promiseFn.then(value => {
//       results[i] = value
//       cache.delete(promiseFn)
//     })
//     if (cache.size >= limit) {
//       await Promise.race(cache)
//     }
//   }
//   await Promise.all(cache)
//   return results
// }

async function loadAll(urls, load, limit, cb) {
  const results = new Array(urls.length)
  const cache = new Set()
  const memo = new Map()
  let promiseFn
  for (let i = 0; i < urls.length; i++) {
    if(memo.has(urls[i])){
      promiseFn = memo.get(urls[i])
    } else{
    promiseFn = load(urls[i])
    memo.set(urls[i], promiseFn)
  }
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
  cb(results)
}
//////
function loadAll(urls, load, limit, cb) {
  const fns = urls.map(url => () => load(url));
  run(fns, limit).then(cb);
}

const url2duration = {
  A: 2000,
  B: 1000,
  C: 1400,
  D:  600,
  E: 1200,
  F: 1800,
  G:  800,
};

const load = (url) => new Promise(resolve => setTimeout(resolve, url2duration[url], url));
const urls = ["A", "B", "C", "A", "D", "B", "E", "B", "F", "G"];

console.time("run");
loadAll(urls, load, 3, (result) => {
  console.log(result);
  console.timeEnd("run");
});
