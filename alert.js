function filterHomogenous(arrays) {
  return arrays.filter(
    item =>
      item.length > 0 &&
      item.every((elem, index, arr) => {
        return typeof arr[0] === typeof arr[index]
      }),
  )
}
console.log(filterHomogenous([[1, 2, 3], ['a', 4], ['', '2'], []]))
