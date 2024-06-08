function race(iterable) {
  return new Promise((resolve, reject) =>{
   for(const promis of iterable){
     Promise.resolve(promis).then(resolve, reject)
   }
  })
 }