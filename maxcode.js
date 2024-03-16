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


  //функциональное программирование - 5
  