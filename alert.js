function countChange(money, coins) {
if (money === 0){
  return 1
}
if(money <= 0 || coins.length === 0) {
  return 0
}

return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

console.log(countChange(4, [1, 2])); // 3
console.log(countChange(10, [5, 2, 3])); // 4