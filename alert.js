function all(promises) {
  return new Promise((resolve, reject) => {
    const cache = []
    let firstCount = 0
    let lastCount = 0

    for (const promis of promises){
      const index = firstCount
      firstCount++

      Promise.resolve(promis).then(value => {
        cache[index] = value
        lastCount++

        if(lastCount === firstCount){
          resolve(cache)
        }
      }).catch(eror => reject(eror))
    }

    if(firstCount === 0){
      resolve(cache)
    }
  })
}


const rand = () => Math.random() * 2000;

const p1 = new Promise(r => setTimeout(r, rand(), "A"));
const p2 = new Promise(r => setTimeout(r, rand(), "B"));
const p3 = new Promise(r => setTimeout(r, rand(), "C"));
const p4 = new Promise(r => setTimeout(r, rand(), "D"));

all([p1, p2, p3, p4]).then(
    value => console.log("1 >>>", value),
    reason => console.log("2 >>>", reason),
);
