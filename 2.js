function countFulfilledPromises(...args) {
  return Promise.allSettled(args).then(promis => promis
    .filter(item => item.status === 'fulfilled').length)
}
//
// function sum(...args){
//   return new Promise((resolve) =>{
//     let sumPromis = 0
//     let iterPromis = 0
//     for(const promis of args){
  
//       promis.then(() => {
//         sumPromis++;
//         iterPromis++
//         if(iterPromis === args.length){
//           resolve(sumPromis)
//         }
//       }, () => {
//         iterPromis++
//         if(iterPromis === args.length){
//           resolve(sumPromis)
//         }
//       })
//     }

//     if(args.length === 0){
//       resolve(sumPromis)
//     }
//   })
// }
//
function sum(...args){
  return args.reduce((acc, item) => {
    // return item.then(value => acc.then(() => value + 1)).catch(() => acc)
    return acc.then(value => item.then(() => value + 1, () => acc))
  }, Promise.resolve(0))
}




const p1 = new Promise(resolve => setTimeout(() => resolve(1), 10 + Math.random() * 10));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 10 + Math.random() * 10));
const p3 = new Promise((_, reject) => setTimeout(() => reject(3), Math.random() * 10));

// sum().then(console.log);            // 0
// sum(p1).then(console.log);          // 1
// sum(p1, p2).then(console.log);      // 2
sum(p3, p2, p1).then(console.log);  // 2
// sum(p1, p3).then(console.log);      // 1 
// sum(p3).then(console.log);          // 0 


