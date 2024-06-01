Array.prototype.map2 = function (callback, thisArg) {
  const arr = Array(this.length)
  for(let i = 0; i < this.length; i++){
    if(i in this){
      arr[i] = callback.call(thisArg, this[i], i, this)
    }
  }
  return arr
}

const multiplicator = {
  x: 5,
  multiply(num) {
    return num * this.x;    
  },
};

console.log([1, 2, 3].map2(multiplicator.multiply));
// [NaN, NaN, NaN]

console.log([1, 2, 3].map2(multiplicator.multiply, multiplicator));
// [5, 10, 15]
