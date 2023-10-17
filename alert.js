function scrollingText(text) {
  let result = text.toUpperCase().split('')
  let ar = []

  result.map((item, index, array) => {
    return ar.push(
      result.slice(index).join('') + result.slice(0, index).join(''),
    )
  })
  return ar
}

console.log(scrollingText('abc'))
