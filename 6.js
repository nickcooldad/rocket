function allSettled(iterable) {
  return new Promise((resolve) => {
    const cache = []
    let innerCount = 0
    let promisesCount = 0
    
    for(const promis of iterable){
      const index = innerCount
      innerCount++
      
      Promise.resolve(promis)
      .then(value => ({status: 'fulfilled', value}), reason => ({status: 'rejected', reason}))
      .then(obj => {
        cache[index] = obj
        promisesCount++
        if(innerCount === promisesCount){
          resolve(cache)
        }
       })
    }
    if(innerCount === 0){
      resolve(cache)
    }
  })
}


const rand = () => Math.random() * 2000;

const p1 = new Promise((_,r) => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

allSettled([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
