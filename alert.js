function filter_list(arr) {
  let newlist = []
  for (let item of arr) {
    if (typeof item === 'number') {
      newlist.push(item)
    }
  }
  return newlist
}
