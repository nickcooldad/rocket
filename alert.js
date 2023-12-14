function groupAnagrams(words) {
  let result = {}
  words.forEach(word => {
    let item = word.split('').sort().join('')
    if (!result[item]) {
      result[item] = []
    }
    result[item].push(word)
  })
  return Object.values(result)
}

console.log(groupAnagrams(['tsar', 'rat', 'tar', 'star', 'tars', 'cheese']))
