function allSettled(iterable) {
  return new Promise((resolve) => {
    const cache = []
    let firstCount = 0
    let lastCount = 0
    
    for(const promis of iterable){
      const index = firstCount
      firstCount++
      
      Promise.resolve(promis)
      .then(value => {
        cache[index] = {status: 'fulfilled', value: value}
         lastCount++
 
          resolve(cache)
         }
      }).catch(er => {
        cache[index] = {status: 'rejected', reason: er}
        
        lastCount++
        if(firstCount === lastCount){
          resolve(cache)
         }
      })
       
    }
    if(firstCount === 0){
      resolve(cache)
    }
  })
}