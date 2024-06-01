function isInstanceOf(obj, clazz) {
  if(typeof clazz !== 'function' ){
    throw Error("Right-hand side of 'instanceof' is not an object!")
  }
  if( typeof obj !== 'object' || obj === null){
    return false
  }
  
  let proto = Object.getPrototypeOf(obj)
  while(proto !== null){
    if(proto === clazz.prototype){
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
  }

console.log(Array.prototype instanceof Array)
console.log(isInstanceOf(Array.prototype, Array))