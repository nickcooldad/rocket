function indexEqualsValue(array) {
  let start = 0,
    end = array.length,
    found = false,
    position = -1,
    middle
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2)
    if (array[middle] === middle) {
      found = true
      position = middle
      return position
    }
  }
  if (middle < array[middle]) {
    end = middle - 1
  } else {
    start = middle + 1
  }
}

console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]))

function indexEqualsValue(arr) {
  let start = 0
  let end = arr.length - 1
  let result = -1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === mid) {
      result = mid
      right = mid - 1 // Проверяем более низкий индекс с тем же значением
    } else if (arr[mid] < mid) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return result
}
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]))
