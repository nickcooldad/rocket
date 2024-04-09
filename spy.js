function spy(fn) {
  
    const argsArr = new Set()
    const resultFn = new Set()
    let counter = 0
  
    function spyOn(...args) {
      const result = fn(...args)
      counter++
      for (let key of args){
        argsArr.add(key)
      }
      resultFn.add(result)
      return result
    }
  
    spyOn.callCount = () => counter
    spyOn.wasCalledWith = (arg) => argsArr.has(arg)
    spyOn.returned = (arg) => resultFn.has(arg)
  
    return spyOn
  }
  