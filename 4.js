function nouveau(constructor, ...arg) {
  let newIstance = {}
  newIstance.__proto__= constructor.prototype
  let result = constructor.apply(newIstance, arg)
  if((typeof result === 'object' || typeof result === 'function') && result !== null){
    return result
  }
  return newIstance
}

function A() {
  return () => {};
}

console.log(new A());
console.log(nouveau(A));

