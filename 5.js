// "use strict";
Function.prototype.call2 = function (thisArg, ...arg) {
  if (thisArg === undefined || thisArg === null) {
    return this(...arg)
  }
  thisArg = Object(thisArg)
  const innerArg = Symbol()
  thisArg[innerArg] = this
  const result = thisArg[innerArg](...arg)
  delete thisArg[innerArg]
  return result
};


function foo(...args) {
  console.log(this, args);
}


foo.call2(undefined, 1, 2);
