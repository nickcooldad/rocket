function any(iterable) {
  return new Promise((resolve, reject) =>{
    const errors = []
    let innerCount = 0
    let promisesCount = 0
    for(const promise of iterable){
      const index = innerCount
      innerCount++

      Promise.resolve(promise).then(value => {
        resolve(value)
      }, error => {
        errors[index] = error
        promisesCount++

        if(promisesCount === innerCount){
          reject(new AggregateError(errors, "All promises were rejected"))
        }
      })
    }
    if(innerCount === 0){
      reject(new AggregateError(errors, "All promises were rejected"))
    }
  })
}