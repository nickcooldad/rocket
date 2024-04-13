function flattenArr(arr, depth = 1) {
  if(depth <= 0){
    return arr
  }
  let result = []
  for (let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item, depth - 1))
    } else{
      result.push(item)
    }
  }
  return result
}

// function flattenArr(arr, depth = 1) {
//   if (depth <= 0) {
//     return arr;
//   }

//   const result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result.push(...flattenArr(item, depth - 1));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }
const x = [1, [[2, [3, 4, [5]], 6], [7]], [8]];

console.log(flattenArr(x)) //=== [1, [2, [3, 4, [5]], 6], [7], 8]

console.log(flattenArr(x, 0)) //=== [1, [[2, [3, 4, [5]], 6], [7]], [8]]

console.log(flattenArr(x, 2)) //=== [1, 2, [3, 4, [5]], 6, 7, 8]

console.log(flattenArr(x, Infinity)) //=== [1, 2, 3, 4, 5, 6, 7, 8]
