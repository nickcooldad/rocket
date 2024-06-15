function all(promises) {
  return new Promise((resolve, reject) => {
    const cache = []
    let firstCount = 0
    let lastCount = 0

    for (const promis of promises){
      const index = firstCount
      firstCount++

      Promise.resolve(promis)
      .then(value => {
        cache[index] = value
        lastCount++

        if(lastCount === firstCount){
          resolve(cache)
        }
      }, error => reject(error))
    }

    if(firstCount === 0){
      resolve(cache)
    }
  })
}