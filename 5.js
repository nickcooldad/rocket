function withRetry(fn, limit) {
  return async (a, b) => {
    const errors = []
    let count = 0
    let boolean = true

    while(boolean){
      try {
        const resultFunction = await fn(a, b)
        boolean = false
        return resultFunction
      } catch(error) {
        errors.push(error)
        count++
        if(count === limit){
          return Promise.reject(new AggregateError(errors, "Too Many Calls"))
        }
      }
    }
  }
}