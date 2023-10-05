var capitals = function (word) {
  let arr = word.split('')
  let ar2 = []
  let ar1 = word.toLowerCase().split('')

  for (let i = 0; i <= arr.length; i++)
    if (arr[i] != ar1[i]) {
      ar2.push(i)
    }
  return ar2
}
