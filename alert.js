function validParentheses(parenStr) {
  let left = []
  let right = []
  let left1 = []
  let right1 = []
  if (
    parenStr.length % 2 != 0 ||
    parenStr === undefined ||
    parenStr === null ||
    parenStr === ')('
  ) {
    return false
  }
  if (parenStr === '') {
    return true
  }
  {
    parenStr.split('').map((elem, index, array) => {
      return array[index] === '(' ? left.push(index) : right.push(index)
    })
    left.map((item, index1, array1) => {
      if (item + 1 === left[index1 + 1]) {
        left1.push(index1)
      }
    })

    right.map((item1, index2, array2) => {
      if (item1 + 1 === right[index2 + 1]) {
        right1.push(index2)
      }
    })
    console.log(left1, right1)
    return left1.every(
      (item3, index3) =>
        item3 <= right1[index3] && left1.length === right1.length,
    )
  }
}
console.log(validParentheses('()))'))
