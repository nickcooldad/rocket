// Function.prototype.pipe = function (fn) {
//   return (arg) => fn(this(arg))
//   }

// Function.prototype.pipe = function (fn) {
//   const thisArg = this
//   return function inner(arg) {
//     return  fn(thisArg(arg))
//   }
// }
 
Function.prototype.pipe = function (fn) {
  function inner(arg) {
    return fn(this(arg))
  }
  return inner.bind(this);
}
 
Function.prototype.pipe = function (fn) {
  return function(arg) {
    return fn(this(arg))
  }.bind(this);
}

"qwert".toUpperCase()
[1,2,3].map(x => x * 2);

// const double = x => x * 2;
// const cube = x => x ** 3;
// const inc = x => x + 1;

// const foo = compose(double, cube, inc);

// console.log(foo(2)); // 54

const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo2 = inc.pipe(cube).pipe(double);

console.log(foo2(2)); // 54
