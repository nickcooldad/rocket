// function and(p1, p2) {
//   return Promise.all([p1, p2])
// }

// function and(p1, p2){
//     return new Promise((resolve, reject) => {
//       return p1.then(value1 => p2.then(value2 => resolve()))
//       .catch(() => reject())
//     })
// }

// function and(p1,p2){
//   return p1.then(() => p2)
//   .catch(() => Promise.reject())
// }
function and(p1, p2){

  return new Promise((resolve, reject) => {
    let countPromise = 0

    const promisFunct = () => {
      countPromise++

      if(countPromise === 2){
        resolve()
      }
    }
    p1.then(promisFunct).catch(reject)
    p2.then(promisFunct).catch(reject)
    
  })
}



const p1 = new Promise((r) => setTimeout(r, 3000))
const p2 = new Promise((_, r) => setTimeout(r, 2000))
p2.then(() => {}, () => {});

console.time("1");
and(p1, p2).then(
  () => console.timeEnd("1"),
  () => console.timeEnd("1"),
);


// and(Promise.resolve(1), Promise.resolve(2)).then(
//   () => console.log("1 fulfulled"), // ✓
//   () => console.log("1 rejected"),
// )

// and(Promise.reject(1), Promise.resolve(2)).then(
//   () => console.log("2 fulfulled"),
//   () => console.log("2 rejected"),  // ✓
// )

// and(Promise.reject(1), Promise.reject(2)).then(
//   () => console.log("3 fulfulled"),
//   () => console.log("3 rejected"),  // ✓
// )
// and(Promise.reject(1), Promise.reject(2)).then(
//   () => console.log("4 fulfulled"),
//   () => console.log("4 rejected"),  // ✓
// )