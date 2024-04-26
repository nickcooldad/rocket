//функциональное программирование - 1 (Array Methods)
function filter(array, callback) {
  let filterArray = []
  for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array)) {
         filterArray.push(array[i])
      }
  }
  return filterArray
}

//функциональное программирование - 2 (Array Methods)
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++){
     callback(array[i], i, array)
    }
  }

//функциональное программирование - 3 (Array Methods)
function map(array, callback) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i], i, array))
    }
      return newArray
  }

//функциональное программирование - 4 (Array Methods)
function zip(a, b, callback) {
  let array = []
  let lengthArray = Math.min(a.length, b.length)
  for (let i = 0; i < lengthArray; i++){
     array.push(callback(a[i], b[i]))
    }
       return array
  }

//функциональное программирование - 5 (Array Methods)
function reduce(array, callback, initialValue) {

  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

//функциональное программирование - 6 (Array Methods)

const search = (a, b) => {
  if(String(a) > String(b)) {
    return 1
  }
  if(String(a) < String(b)){
    return -1
  } else { 
    return 0
  }
}

function sort(arr, compareFn = search){
    for (let i = 0; i < arr.length; i++){
      for (let j = i; j < arr.length; j++){
           let cache = arr[i]
           if(compareFn(arr[i], arr[j]) > 0){
             arr[i] = arr[j]
             arr[j] = cache
            }
     }
    }
}

//функциональное программирование - 7 (First-class Citizens)
   function findInteger(...args) {
    let count = 1
      while(!args.every(condition => condition(count))){
       count++
         }
      return count
    }

//функциональное программирование - 8 (First-class Citizens)
function plural(declensionArray) {
  let declensionObj = {0 : 2, 1 : 0, 2 : 1, 3 : 1, 4 : 1}
  return function(quantity) {
    let lastNum = quantity.toString().at(-1)
    if (quantity > 4 && quantity < 21){
      return declensionArray[2]
    }
    if(lastNum in declensionObj){
      return declensionArray[declensionObj[lastNum]]
      }
    return declensionArray[2]
    }
  }

  function plural([one, few, many]) {
    return (num) => {
      if (num % 10 === 1 && num !== 11) {
        return one;
      }
      if (num > 10 && num < 15) {
        return many;
      }
      if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
        return few;
      }
      return many;
    }
  }

//функциональное программирование - 9 (First-class Citizens)

  function query(...funct) {
    return (array) => funct.reduce(
      (acc, item) => item(acc),
      array,
    )
  }
  
  function where(obj){
    const key = Object.keys(obj)
    return (arr) => arr.filter(item => key.every(element => item[element] === obj[element]) )
  }
  
  function sort(option){
    return (arr) => arr.toSorted((a, b) => {
      if(a[option] > b[option]){
        return 1
      }
      if (a[option] < b[option]){
        return -1
    } else {
        return 0
     }
    })
  }

//функциональное программирование - 10 (First-class Citizens)

    function group(arr, isEqual) {
      const cache = []
    
      arr.forEach(element => {
        const group = cache.find(item => isEqual(element, item[0]))
    
        if(group !== undefined){
          group.push(element)
        } else {
          cache.push([element])
        }
      });
      console.log(cache)
      return cache
    }
    
//функциональное программирование - 11 (First-class Citizens)

    function groupBy(items, cb) {
     return [...items].reduce((acc, item, index) =>{
       if(!acc.has(cb(item, index))){
          acc.set(cb(item, index), [])
       }
        acc.get(cb(item, index)).push(item)
       return acc
      }, new Map())
      }

      //
      function groupBy(iterable, cb) {
        const cache = new Map();
        [...iterable].forEach((element, index) => {
          if(!cache.has(cb(element, index))){
            cache.set(cb(element, index), [])
          }
          cache.get(cb(element, index)).push(element)
        });
        return cache
      }

//функциональное программирование - 12 (First-class Citizens)

function groupBy(array, classifier, downstream, accumulatorSupplier) {
  const cache = new Map();
    [...array].forEach((item,index) => {
      const key = classifier(item, index)
      if(!cache.has(key)){
        cache.set(key, accumulatorSupplier())
         } 
    cache.set(key, downstream(cache.get(key), item))
    })
  return cache
}

//функциональное программирование - 13 (First-class Citizens)

const defoltCompare = (array) => {
  if(array.every(item => typeof item[0] === 'string')){
   return array.toSorted()
  } else {
   return array.toSorted((a, b) => a[0] - b[0])
  }
 }

function frequency(arr, options = defoltCompare) {
  const cache = new Map

  const defoltFrequency = (arr) => {
    return arr.toSorted((a, b) => options.compareTo(a[0], b[0], a[1], b[1]))
   }

  if(options.criteria !== undefined){
    arr.forEach((item, index) => {
      if(!cache.has(options.criteria(item, index))){
        cache.set(options.criteria(item, index), 0)
      }
      cache.set(options.criteria(item, index), cache.get(options.criteria(item)) +1)
    })
    if(options.compareTo !== undefined){
      return defoltFrequency([...cache])
    }
    return defoltCompare([...cache])
  }

  arr.forEach((item) => {
    if(!cache.has(item)){
      cache.set(item, 0)
    }
    cache.set(item, cache.get(item) + 1)
     
  })

  if(options.compareTo !== undefined){
    return defoltFrequency([...cache])
  }
  return defoltCompare([...cache])
  }
//
function frequency(arr, options = {}) {
  const cache = new Map
  const {
    criteria = x => x,
    compareTo = (val1, val2) => val1 > val2 ? 1 : -1,
  } = options

  arr.forEach((item) => {
    const key = criteria(item)
    if(!cache.has(key)){
      cache.set((key), 0)
    }
    cache.set(key, cache.get(key) + 1)
  })

  return [...cache].toSorted((a, b) => compareTo(a[0], b[0], a[1], b[1]))
}

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}


  //функциональное программирование - 14 (First-class Citizens)
  function repeatGenerator(str) {
    let count = 0
    return () => {
      const result = str[count];
      
      count++
      if (count >= str.length){
        count = 0
      }
      
      return result
    }
  }

  //функциональное программирование - 15 (First-class Citizens)
  function fibonacciGenerator() {
    let count = 0
    let fibonacciArr = [0, 1]
    return () => {
      if(count > 1) {
        fibonacciArr.push(fibonacciArr[count - 1] + fibonacciArr[count - 2])
      }
      return fibonacciArr[count++]
    }
  }
//
function fibonacciGenerator() {
  let firstCount = 0 // 5 → 8
  let lastCount = 1  // 8 → 13
  return () => {
    const result = firstCount;

    [firstCount, lastCount] = [lastCount, firstCount + lastCount];
    // const sum = firstCount + lastCount
    // firstCount = lastCount
    // lastCount = sum
    return result
  }
}

  //функциональное программирование - 16 (First-class Citizens)
  function primeGenerator() {
    let num = 2
    return () => {
      while(!isPrime(num)){
       num++
       }
       return num++
    }
  }
  
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
//
function primeGenerator() {
  let num = 2
  return () => {
    const result = num

    // while(true){
    //  num++
    //  if (isPrime(num)) {
    //   break;
    //  }
    // }

    do {
      num++;
    } while (!isPrime(num))

    return result
  }
}


function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
//функциональное программирование - 17 (First-class Citizens)
  function multiPredicate(...args) {
    return (arg) => args.every(funct => funct(arg))
    }

//функциональное программирование - 18 (First-class Citizens)

function compose(...args) {
  return (variable) => args.reduceRight((acc, item) => item(acc), variable)
  }


  //функциональное программирование - 19 (First-class Citizens)

  function compose(...args) {
    return (variable) => {
      let result = variable
      for (let i = args.length - 1; i >= 0; i--){
         result = args[i](result)
      }
      return result
    }
  }
  
  //функциональное программирование - 20 (First-class Citizens)
  function once(funct) {
    let count = 0
   return (...args) => {
    if(count > 0){
      return undefined
    }
    count++
    return funct(...args)
   }
  }

//функциональное программирование - 21 (First-class Citizens)
function memo(fn) {
  const cache = new Map()
  return (args) => {
    if (cache.has(args)){
      return cache.get(args)
    }
    cache.set(args, fn(args))
    return cache.get(args)
  }
}

//функциональное программирование - 22 (First-class Citizens)
// function memo(fn) {
//   const cache = new Map();
//   return function(...arg) {
//       const key = collecting(arg)
//     if (!cache.has(key)) {
//       cache.set(key, fn(...arg));
//     }
//     return cache.get(key);
//   };
// }

// const collecting = (args) => {
//   if (Array.isArray(...args)){
//       return args.join(';')
//   }
//   if ( typeof args[0] === 'number'){
//       return +args.join('')
//   }
//   if(args !== null && typeof args[0] !== 'function' && typeof args[0] === 'object'){
//       for (let key in args){
//         return args[key]
//       }
//   } else {
//       return args.join('')
//   }
//}
//

const search1 = (array1, array2) =>  array1.length === array2.length && array1.every((_, index) => array1[index] === array2[index])


function memo(fn) {
  const cache = []
  return function(...args) {
    const objRes = cache.find((item) => search1(item.args, args))
    if(objRes === undefined){
      const result = fn(...args)
      cache.push({ args, result })
      return result;
    } 
    return objRes.result
    }
  }
//функциональное программирование - 23 (First-class Citizens)

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


//функциональное программирование - 24 (First-class Citizens)

function join(...str) {
  return (innerStr) => {
    if(innerStr !== undefined) {
     return join(...str, innerStr)
    } else {
     return str.join(' ')
    }
  }
}

//функциональное программирование - 25 (First-class Citizens)

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

//функциональное программирование - 26 (First-class Citizens)
function partial(fn, ...args1) {
  return (...args2) => {
    const cache = []
    const innerArgs = args2
    for (let key of args1){
      if(key === partial.placeholder){
        cache.push(innerArgs.shift())
      } else {
        cache.push(key)
      }
    }
   return fn(...cache, ...innerArgs)
  }
}
partial.placeholder = Symbol('placeholder');
//
function partial(fn, ...args1) {
  return (...args2) => {
    const cache = []
    const memory = []
    let j = 0
    for (let i = 0; i < args1.length; i++) {
      if (args1[i] === partial.placeholder) {
        cache.push(args2[j])
        j++
      }
      else {
        cache.push(args1[i])
      }
    }
    for (let i = j; i < args2.length; i++) {
      memory.push(args2[i])
    }
    return fn(...cache, ...memory)
  }
}
partial.placeholder = Symbol('placeholder');



//функциональное программирование - 27 (First-class Citizens)
function curry(fn, ...arg) {
  if(arg.length >= fn.length){
     return fn(...arg)
  } else {
    return (...args) => curry(fn, ...arg, ...args)
     }
  }

  //функциональное программирование - 28 (First-class Citizens)
  function uncurry(fn) {
    return (...args) => { 
     let result = fn
     let count = 0
     while(typeof result() === 'function'){
      result = result(args[count])
      count++
     }
     return result(args[count])
     }
   }
   //
   function uncurry(fn) {
    return (...args) => {
      let result = fn
      let count = 0
      while (typeof result === 'function') {
        result = result(args[count])
        count++
      }
      return result
    }
  }

//рекурсия - 1 (First-class Citizens)

const objCheking = (obj) => typeof obj === 'object' &&  !Array.isArray(obj) && obj !== null

function depth(obj) {
  let depthCount = 0
  let depthMax = 0
  if(objCheking(obj)){
  for (let key in obj){
    if(obj[key] !== undefined){
      depthCount = 1 + depth(obj[key])
    }
    depthMax = Math.max(depthCount, depthMax)
  }}
  return depthMax
}
//

function depth(obj) {
  if(!objCheking(obj)){
    return 0
  }
  // let depthMax = 0
  // for (let key in obj){
  //   depthMax = Math.max(depthCount, depth(obj[key]))
  // }
  // return depthMax + 1

  const values = Object.values(obj);
  const depths = values.map(depth);
  const maxDepth = Math.max(...depths);

  return maxDepth + 1
}

// ["12", "5"].map(Number);

//рекурсия - 2 (First-class Citizens)
function sumTheTreeValues(root) {
  let result = root.value
    if(root.left !==  null){
      result += sumTheTreeValues(root.left)
    }
    if(root.right !== null){
      result += sumTheTreeValues(root.right)
    }
  return result
}
//
function sumTheTreeValues(root) {
  if(root === null){
    return 0
  }
  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
}


 //рекурсия - 3 (First-class Citizens)
function maxSum(root) {
  if (!root) return 0;
  if(root.left === null){
    return root.value + maxSum(root.right)
  }
  if(root.right === null){
    return root.value + maxSum(root.left)
  }

  const leftSum = root.value + maxSum(root.left);
  const rightSum = root.value + maxSum(root.right);

  return Math.max(leftSum, rightSum)
}
//

//рекурсия 4
function deepCompare(o1, o2) {
  if (isObject(o1) && !isObject(o2)) {
    return false
  }
  if (!isObject(o1) && isObject(o2)) {
    return false
  }
  if (!isObject(o1) && !isObject(o2)) {
    return o1 === o2
  }
  if(Object.keys(o1).length !== Object.keys(o2).length){
    return false
  }

  return Object.keys(o1).every(key => deepCompare(o1[key], o2[key]))
}

function isObject(o1) {
  return o1 !== null && typeof o1 === "object" && !Array.isArray(o1);
}
//
function deepCompare(o1, o2) {
  // if (isObject(o1) && !isObject(o2)) {
  //   return false
  // }
  // if (!isObject(o1) && isObject(o2)) {
  //   return false
  // }
  // if (!isObject(o1) && !isObject(o2)) {
  //   return o1 === o2
  // }

  if (!isObject(o1) || !isObject(o2)) {
      return o1 === o2
  } 

  if(Object.keys(o1).length !== Object.keys(o2).length){
    return false
  }

  return Object.keys(o1).every(key => deepCompare(o1[key], o2[key]))
}

function isObject(o1) {
  return o1 !== null && typeof o1 === "object" && !Array.isArray(o1);
}

//рекурсия 5
function smartSum(arr) {
  return arr.reduce((acc, item) => 
  acc + (Array.isArray(item) ? smartSum(item) : item), 0)
 }

 //рекурсия 6
 function flattenArr(arr, depth = 1) {
  if(depth <= 0){
    return arr
  }
  let result = []
  for (let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item, depth - 1))
    } else{
      result.push(item)
    }
  }
  return result
}
//
 //рекурсия 6
 function flattenArr(arr, depth = 1) {
  if(depth <= 0){
    return arr.slice()
  }
  let result = []
  for (let item of arr){
    if(Array.isArray(item)){
      result.push(...flattenArr(item, depth - 1))
    } else{
      result.push(item)
    }
  }
  return result
}

//рекурсия 7
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function recordDepth(obj, depth = 0) {
  obj.depth = depth
  for(let key in obj){
    if(isObj(obj[key])){
     recordDepth(obj[key], depth + 1)
    }
  }
  return obj
}
//
//рекурсия 7
const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function recordDepth(obj, depth = 0) {
  if(!isObj(obj)){
     return obj;
  }
  obj.depth = depth
  for(let key in obj){
    recordDepth(obj[key], depth + 1)
  }
  return obj
}
//рекурсия 8
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function flattenObj(obj, keysArray = []) { 
 const flattObj = {}
 for (const key in obj){
  if(isObj(obj[key])){
    const innerFlatt = flattenObj(obj[key], [...keysArray, key])
      for(const keys in innerFlatt){
        flattObj[keys] = innerFlatt[keys]
      }
  } else {
    flattObj[[...keysArray, key].join('/')] = obj[key]
  }
 }
 return flattObj
}
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function flattenObj(obj, keysArray = []) { 
  const flattObj = {}
  for (const key in obj){
   if(isObj(obj[key])){
      const innerFlatt = flattenObj(obj[key], [...keysArray, key])
      //  for(const keys in innerFlatt){
      //    flattObj[keys] = innerFlatt[keys]
      //  }
     Object.assign(flattObj, innerFlatt)
      
   } else {
     flattObj[[...keysArray, key].join('/')] = obj[key]
   }
  }
  return flattObj
 }

//
//рекурсия 9

function isBST(root, min = -Infinity, max = Infinity) {
  if(root === null){
    return true
  }

  return root.value > min && root.value < max
    && isBST(root.left, min, root.value)
    && isBST(root.right, root.value, max)
}

//рекурсия 10
//const isObj = (obj) => obj !== null && !Array.isArray(obj) && typeof obj === 'object'

function clone(obj, link = new Map()) {
  if(!isObj(obj)){
    return obj
  }
  const newObj = {}
  for(let key in obj){
    newObj[key] = link.has(key) ? 
    link.get(key) : clone(obj[key], link.set(key, obj[key]))
  }
  return newObj
}

//рекурсия 12
function countChange(money, coins) {
  if (money === 0){
    return 1
  }
  if(money < 0 || coins.length === 0) {
    return 0
  }
  
  return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
  }
//рекурсия 13
function countChange(money, coins, counts = [], sum = 0) {
  if (sum === money){
    return [counts.join('+')]
  }
  if(sum > money || coins.length === 0) {
    return []
  }
  return [...countChange(money, coins.slice(1), counts, sum), ...countChange(money, coins, [...counts, coins[0]], sum + coins[0])]
  }