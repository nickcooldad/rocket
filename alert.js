function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0 + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]
      if (target === sum) {
        return [i, j]
      }
    }
  }
}
console.log(twoSum([1, 2, 3, 4], 5))
