// reduce
function rowWeights(array) {
  let number1 = array
    .filter((item, index, array) => {
      if (index % 2 === 0) {
        return array[index]
      }
    })
    .reduce((acc, item, index, arr) => {
      return (acc = acc + item)
    }, 0)
  let number2 = array
    .filter((item, index, array) => {
      if (index % 2 != 0) {
        return array[index]
      }
    })
    .reduce((acc, item, index, arr) => {
      return (acc = acc + item)
    }, 0)
  //console.log(number1, number2)
  let ar = []
  ar.push(number1, number2)
  //console.log(ar)
  return ar
}
console.log(rowWeights([80]))
