function findShort(s) {
  let newfind = s.split(' , ')
  for (let item of newfind) {
    console.log(item)
    console.log(item.length)
    let i = 100
    let num = item.length
    if (num < i) i = num
    console.log(i)
    return i
  }
}

findShort('bitcoin take over the world maybe who knows perhaps')
