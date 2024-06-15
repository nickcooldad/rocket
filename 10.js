function getState(promise) {
  return new Promise ((resolve) => {
    promise.then(() => {
      resolve('fulfilled')
    }, () => {
      resolve('rejected')
    })
    queueMicrotask(() => resolve('pending'))
 })
}

// // Промис резолвится через 2 секунды
// const p = new Promise(resolve => {
//   setTimeout(() => resolve("xxx"), 2000);
// });

// // Через 1 секунду функция говорит, что он pending
// setTimeout(() => {
//   getState(p).then(status => console.log(status)); // "pending"
// }, 1000);

// // Через 3 секунды тот же промис уже fulfilled
// setTimeout(() => {
//   getState(p).then(status => console.log(status)); // "fulfilled"
// }, 3000);


const p1 = new Promise(r => {
  Promise.resolve().then(r);
})

console.log(p1);

getState(p1).then(actual => {
  console.log(p1);
  console.log({ actual, expected: "pending" });
});
