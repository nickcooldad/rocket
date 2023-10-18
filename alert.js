function box(num) {
  let array = []
  array.length = num * num
  array.fill('-')
  array
  return array
}
console.log(box(3))
