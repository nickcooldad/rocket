//функциональное программирование - 1
function filter(array, callback) {
  let filterArray = []
  for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array)) {
         filterArray.push(array[i])
      }
  }
  return filterArray
}

//функциональное программирование - 2
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++){
    array[i] = callback(array[i], i, array)
    }
  }

//функциональное программирование - 3
function map(array, callback) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i], i, array))
    }
      return newArray
  }

  //функциональное программирование - 4
function zip(a, b, callback) {
  let array = []
  for (let i = 0; i < a.length; i++){
     array.push(callback(a[i], b[i]))
    }
       return array
  }

//функциональное программирование - 5
function zip(a, b, callback) {
  let array = []
  for (let i = 0; i < a.length; i++){
    array.push(callback(a[i], b[i]))
  }
  return array
  }


  //функциональное программирование - 6
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

    //функциональное программирование - 7

    function sort(arr, compareFn) {
      for (let i = 0; i < arr.length; i++){
          for (let j = i; j < arr.length; j++){
            let cache = arr[i]
              if(!compareFn){
                  let a = arr[i].toString().charCodeAt()
                  let b = arr[j].toString().charCodeAt()
                  if (a - b > 0 || (a - b === 0 && arr[i].toString().length > arr[j].toString().length)) {
                      arr[i] = arr[j]
                      arr[j] = cache
                  }
              }
              if(compareFn !== undefined && compareFn(arr[i], arr[j]) > 0){
                arr[i] = arr[j]
                arr[j] = cache
                }
          }
        }
      }