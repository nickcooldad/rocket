// function withRetry(fn, limit) {
//   return async (...args) => {
//     const errors = []

//     while(true){
//       try {
//         // const resultFunction = await fn(...args)
//         // return resultFunction
//         return await fn(...args)
//       } catch(error) {
//         errors.push(error)
//         if(errors.length === limit){
//           throw new AggregateError(errors, "Too Many Calls")
//         }
//       }
//     }
//   }
// }

// function withRetry(fn, limit){
//   return async (...args) => {
//     const errors = []

//     for(let i = 0; i < limit; i++){
//       try{
//         return await fn(...args)
//       } catch(error){
//         errors.push(error)
//       }
//     }
//     throw new AggregateError(errors, "Too Many Calls")
//   }
// }

function withRetry(fn, limit){
  
  function inner (args, errors = []) {
    if(errors.length === limit){
      return Promise.reject(new AggregateError(errors, "Too Many Calls"))
    }

    return fn(...args).catch(error => {
      errors.push(error)
      return inner(args, errors)
    })
  }

  return (...args) => inner(args);
}



function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        resolve(a + b);
      } else {
        reject("err");
      }
    }, 500);
  });
}

// sum(3, 2).then(
//   value => console.log(value),
//   // 5 (с вероятностью 30%)
//   reason => console.log(reason),
//   // 'err' (с вероятностью 70%)
// );

const enhancedSum = withRetry(sum, 4);

enhancedSum(3, 2).then(
  value => console.log(value),    
  // 5 (с вероятностью 76%)
  reason => console.log(reason.errors),
  // ['err1', 'err2', 'err3', 'err4']
  // (с вероятностью 24%)
);
