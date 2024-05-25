Array.prototype.map2 = function (callback, thisArg) {
    const arr = Array(this.length)
    for(let i = 0; i < this.length; i++){
      if(i in this){
        if(thisArg !== undefined){
          arr[i] = callback.call(thisArg, this[i], i, this)
        } else{
          arr[i] = callback(this[i], i, this)
        }
      }
    }
    return arr
  }