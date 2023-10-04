//filter includes
function arrayDiff(a, b) {
  return a.filter(function (element, index, array) {
    element => !b.includes(element)
  })
}
consol.log(arrayDiff([1, 2, 3, 4, 5], [2, 3]))

let filteredArray = a.filter(function (item) {
  return !b.includes(item)
})

let c = a.reduce((acc, item) => {
  if (!b.includes(item)) acc.push(item)
  return acc
}, [])

//filter includes

function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element))
}
console.log(arrayDiff([1, 2, 3, 4, 5], [2, 3]))
