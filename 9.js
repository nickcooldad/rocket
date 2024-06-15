// function timeLimit(fn, ms) {
//   return (...value) => new Promise((resolve, reject) => {
//     setTimeout(() => reject("Time Limit Exceeded"), ms)
//     fn(...value).then(value => resolve(value), reason => reject(reason))
//   })
// }

function timeLimit(fn, ms){
  return (...value) => {
    return Promise.race([reason(ms), fn(...value)])
  }
}

function reason(ms){
  return new Promise((_, reject) => setTimeout(()=> reject("Time Limit Exceeded"), ms))
}