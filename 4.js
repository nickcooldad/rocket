function all(promises) {
  return new Promise((resolve) => {
    const cache = []
    let innerCount = 0
    let promisCount = 0

    for (const promis of promises){
      const index = innerCount
      innerCount++

      Promise.resolve(promis).then(value => {
        cache[index] = value
        promisCount++

        if(promisCount === innerCount){
          resolve(cache)
        }
      })
    }

    if(innerCount === 0){
      resolve(cache)
    }
  })
}