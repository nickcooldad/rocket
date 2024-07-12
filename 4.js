function loadAll(urls, load, limit, cb) {
  const result = new Array(urls.length)
  const cache = new Map()
  let started = 0
  let finished = 0

  if(urls.length === 0){
    return cb(result)
  }

  function helper() {
    if (finished === urls.length){
     return cb(result);
    }

    if(started === urls.length){
      return;
    }

    const i = started
    started++
    if(cache.has(urls[i])){
      cache.get(urls[i]).then(value => {
        result[i] = value
      })
      finished++
      helper()
    } else {
     const promise = load(urls[i]).then(value => {
        cache.set(urls[i], Promise.resolve(value))
        result[i] = value
        finished++
        helper()
        return value
      })
      cache.set(urls[i], promise)
    }
   
  }

  for(let i = 0; i < limit; i++){
    helper()
  }
}
