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

//функциональное программирование - 8 (First-class Citizens)
   function findInteger(...args) {
    let count = 1
      while(!args.every(condition => condition(count))){
       count++
         }
      return count
    }

//функциональное программирование - 9 (First-class Citizens)
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

  //функциональное программирование - 10 (First-class Citizens)

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
    return (arr) => arr.slice().sort((a, b) => {
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