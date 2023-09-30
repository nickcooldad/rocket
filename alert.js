function isPerfect(n) {
  let sum = 0
  for (i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      sum += i
    }
  }
  return sum === n ? true : false
}
isPerfect(28)

function isPerfect(n) {
  var temp = 0
  for (var i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      temp += i
    }
  }

  if (temp === n && temp !== 0) {
    return true
  } else {
    return false
  }
}
isPerfect(28)
