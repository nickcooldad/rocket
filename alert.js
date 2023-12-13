function myLanguages(results) {
  return Object.entries(results)
    .filter(item => item[1] >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(elem => elem[0])
}
console.log(myLanguages({Java: 10, Ruby: 80, Python: 65}))
