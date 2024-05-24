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



console.log([1, 2, 3].map2(x => x ** 2));
// [1, 4, 9]


console.log(["a", "b", "c", "d"].map2((x, i) => x.repeat(i)));
// ["", "b", "cc", "ddd"]

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

const a = Array(5);
a[2] = 2;
const b = a.map2(x => x * 2);
console.log(b)
console.log(0 in b); // false
