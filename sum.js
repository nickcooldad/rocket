function sum(a) {
    function innerSum(b) {
      if(b !== undefined){
        return sum(a + b)
      }
    }
    innerSum["toString"] = () => "qwerty"
    innerSum["valueOf"] = () => a
    // innerSum[Symbol.toPrimitive] = () => a
    return innerSum
  }
  

  const s = sum(1)(2)(3);

  console.log(`Hello, ${s}`);
  console.log(s + 1000);