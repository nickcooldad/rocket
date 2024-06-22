
async function run(fns, limit) {
  let cache = []
   for(let i = 0; i <= fns.length; i += limit){
    let functionResult = await Promise.all(fns.slice(i, i + limit).map(fn => fn()))
    cache.push(...functionResult)
   }
  return Promise.resolve(cache)
}  