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
    
        if(group){
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
      if(!cache.has(classifier(item, index))){
        cache.set(classifier(item, index), accumulatorSupplier())
         } 
    cache.set(classifier(item, index), downstream(cache.get(classifier(item, index)), item))
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

  //функциональное программирование - 14 (First-class Citizens)
  function repeatGenerator(str) {
    let count = 0
    return () => {
      if (count >= str.length){
        count = 0
      }
      return str[count++]
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

  //функциональное программирование - 17 (First-class Citizens)
  function multiPredicate(...args) {
    return (arg) => args.every(funct => funct(arg))
    }