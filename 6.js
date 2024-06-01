Function.prototype.bind2 = function (thisArg, ...args) {
  const thisLink = this
  return function (...restArgs) {
    if (thisArg === undefined) {
      return thisLink(...args, ...restArgs)
    } 
    const newThisArg = Object(thisArg)
    return thisLink.call(newThisArg, ...args, ...restArgs)
  }
}

function f(a, b, c) {
  return this.x + a + b + c;
}

const obj = { x: 1 };
const foo = f.bind2(obj, 10, 100);

console.log(foo(2000)); // 2111
console.log(foo(3000)); // 3111
