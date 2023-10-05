function insertDash(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .filter(item => item % 2 === 1)
    .forEach((item, index, array) => {
      return item + 1
    }, 0)
}
console.log(insertDash(1234567))
