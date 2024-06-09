function countFulfilledPromises(...args) {
  return Promise.allSettled(args).then(promis => promis
    .filter(item => item.status === 'fulfilled').length)
}
////
function sum(...args){
  return new Promise((resolve) =>{
    let sumPromis = 0
    let innerPromis = 0
    let iterPromis = 0
    for(const promis of args){
      innerPromis++

      promis.then(value => {
        sumPromis++;
        iterPromis++
        if(iterPromis === innerPromis){
          resolve(sumPromis)
        }
      })
      .catch(error => {
        resolve(sumPromis)
      })
    }

    if(innerPromis === 0){
      resolve(sumPromis)
    }
  })
}




//////
const p1 = new Promise(resolve => resolve(1));
const p2 = new Promise(resolve => resolve(2));
const p3 = new Promise((_, reject) => reject(3));

sum().then(console.log);            // 0
sum(p1).then(console.log);          // 1
sum(p1, p2).then(console.log);      // 2
sum(p1, p2, p3).then(console.log);  // 2
sum(p1, p3).then(console.log);      // 1 
sum(p3).then(console.log);          // 0 
