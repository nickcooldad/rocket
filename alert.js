function generateShape(integer) {
  // fill, join
  for (let i = 0; i < integer; i++) {
    let arr = []
    arr.push(``)
  }
  arr.fill('#', 0, integer)
  return
}
console.log(generateShape(3))
