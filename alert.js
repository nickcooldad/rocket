function caled() {
  let sum
  for (let i = 0; i < arguments.length; i++) {
    // console.log(i)
    sum = i + 1
  }
  return sum
}
console.log(caled(1, 2, 3, 6, 7))
