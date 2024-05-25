function groupBy(iterable, cb) {
  let obj = Object.create(null)
  let index = 0
  for(let item of iterable){
    const groupKey = cb(item, index)
    obj[groupKey] ??= []
    obj[groupKey].push(item)
    index++
  }
  return obj
}

console.log(Object.groupBy(
  "AaaBbbCcc",
  x => x.toLowerCase(),
));

// const result = {
//   "1": [1, 4],
//   "3": [123],
//   "5": [44444, 88888, 12345],
// };

// console.log(groupBy(
//   [1, 4, 123, 44444, 88888, 12345].values(),
//   x => x.toString().length,
// ));

// const result = {
//   "1": [1, 4],
//   "3": [123],
//   "5": [44444, 88888, 12345],
// };
