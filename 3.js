// function createCounter() {
//     let obj = {}
//     curent = 0
//     Object.defineProperty(obj, 'count', {
//       get(){
//         return curent++
//       },
//       set(newValue){
//         console.log()
//       },
//       enumerable: true,
//       configurable: true,
//       })
//     return obj
//   }

function createCounter() {
  let curent = 0
  return {
    get count (){
      return curent++
    },
  }
}