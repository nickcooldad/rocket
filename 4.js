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
