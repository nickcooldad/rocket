function any(iterable) {
  return new Promise((resolve, reject) =>{
    const errors = []
    let firstCount = 0
    let lastCount = 0
    for(const promise of iterable){
      const index = firstCount
      firstCount++

      Promise.resolve(promise).then(value => {
        resolve(value)
    })
    .catch(error => {
      errors[index] = error
      lastCount++

      if(lastCount === firstCount){
        reject(new AggregateError(errors, "All promises were rejected"))
      }
    })
    }
    if(firstCount === 0){
      reject(new AggregateError(errors, "All promises were rejected"))
    }
  })
}