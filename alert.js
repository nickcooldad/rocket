const arrCheck = value => {
  return value.every(item => Array.isArray(item))
}
console.log(arrCheck([{}, {}]))
