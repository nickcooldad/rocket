// 1(0) задача
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}
//    2(1) задача
function opposite(number) {
  return -number
}
//  3(2) задача
function century(year) {
  return Math.ceil(year / 100)
}
//   4(3) задача
function abbrevName(name) {
  let arr = name.split(' ')
  let name1 = arr[0][0].toUpperCase()
  let surname = arr[1][0].toUpperCase()
  return `${name1}.${surname}`
}
// 5(4) задача (1 решение)
function solution(str) {
  let sum = ''
  for (let i = 0; i < str.length; i++) {
    sum += str.at(~i)
  }
  return sum
}
// 5(4) задача (2 решение)
function solution(str) {
  return str.split('').reverse().join('')
}
// 6(5) задача (1 решение)
function maskify(cc) {
  let data = cc.split('')
  let arr0 = []
  if (data.length > 4) {
    let arr1 = data.slice(-4)
    let arr2 = data.slice(0, data.length - 5)
    for (let i = 0; i <= arr2.length; i++) {
      arr0.push('#')
    }
    return [...arr0, ...arr1].join('')
  } else return data.join('')
}
// 6(5) задача (2 решение)
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}
// задача 7(6) (1 решение)
function removeChar(str) {
  let arr = str.split('')
  arr.pop()
  arr.shift()
  return arr.join('')
}
// задача 7(6) (2 решение)
function removeChar(str) {
  return str.slice(1, -1)
}
// задача 8 (7)
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join('')}) ${numbers
    .slice(3, 6)
    .join('')}-${numbers.slice(6).join('')}`
}
// задача 9(8)
function args_count() {
  return arguments.length
}
// задача 10(9)
function isLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 != 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return true
  } else {
    return false
  }
}
// задача 11 (10)
var countSheep = function (num) {
  let sleep = ''
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      sleep = sleep + `${i} sheep...`
    }
    return sleep
  } else {
    return ''
  }
}
// задача 12 (11)
function nbYear(p0, percent, aug, p) {
  let i = 0
  for (i; p0 < p; i++) {
    p0 = Math.trunc(p0 + (p0 * percent) / 100 + aug)
  }
  return i
}
// задача 13 (12) (решение мое = неправильное)
function isPerfect(n) {
  let sum = 0
  for (i = 1; i < n - 1; i++) {
    if (n % i === 0) {
      sum += i
    }
  }
  return sum === n ? true : false
}

//решение правильное не мое!
const isPerfect = (num = 1) => {
  if (num === 1) {
    return false
  }
  let sum = 1
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      sum = sum + i + num / i
      if (sum > num) {
        return false
      }
    }
  }
  return sum === num
}
// задача 14(100) (массивы и строки)
function filter_list(arr) {
  let newlist = []
  for (let item of arr) {
    if (typeof item === 'number') {
      newlist.push(item)
    }
  }
  return newlist
}
//задача 15(101)
function findShort(s) {
  let newfind = s.split(' ')
  let arr = []
  for (let item of newfind) {
    arr.push(item.length)
  }
  let i = Math.min.apply(Math, arr)
  return i
}
// задача 16(102)
function positiveSum(arr) {
  // filtr
  return arr.filter(index => index > 0).reduce((acc, item) => acc + item, 0)
}
//задача 17(103)
function generateShape(integer) {
  let array = []
  for (let i = 0; i < integer ** 2 + integer - 1; i++) {
    array.push('+')
  }
  for (let j = integer + 1; j < integer ** 2 + integer; j += integer + 1) {
    array.fill('\n', j - 1, j)
  }
  return array.join('').toString()
}
// задача 18(104) (тупое решение)
function getCount(str) {
  let num = 0
  for (let str1 of str) {
    if (
      str1.includes('a') === true ||
      str1.includes('e') === true ||
      str1.includes('i') === true ||
      str1.includes('o') === true ||
      str1.includes('u') === true
    )
      num += 1
    console.log(str1)
  }
  return num
}
getCount('abarfgrbae')

//задача 18(104) (адекватное решение)
function getCount(str) {
  const arr = ['a', 'e', 'i', 'o', 'u']

  return str
    .split('')
    .reduce((acc, item) => (arr.includes(item) ? acc + 1 : acc), 0)
}
// задача 19(105)

function digPow(n, p) {
  let num = n
    .toString()
    .split('')
    .map(Number)
    .reduce((prev, item, index) => {
      return prev + item ** (p + index)
    }, 0)
  if (num % n === 0) {
    return num / n
  } else {
    return -1
  }
}
//задача 20(106)
function min(arr, toReturn) {
  let array = arr.reduce(
    (prev, item, index) => {
      return item < prev[1] ? [index, item] : prev
    },
    [0, arr[0]],
  )
  return toReturn === 'value' ? array[1] : array[0]
}

//задача 21(107)
function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element))
}
// задача 22(108)
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
//задача 23(109)
function insertDash(num) {
  num = num.toString().split('').map(Number)
  for (let i = 1; i < num.length; i++) {
    if (num[i] % 2 != 0 && num[i - 1] % 2 != 0) {
      num.splice(i, 0, '-').join('')
      i++
    }
  }
  return num.join('')
}
// задача 24(110)
function filterHomogenous(arrays) {
  return arrays.filter(
    item =>
      item.length > 0 &&
      item.every((elem, index, arr) => {
        return typeof arr[0] === typeof arr[index]
      }),
  )
}
//задача 25(111)
function bingo(ticket, win) {
  let arwin = ticket.filter(item1 =>
    item1[0].split('').some((item, index, array) => {
      console.log(item, item1[1])
      return array[index].charCodeAt(0) === item1[1]
    }),
  )
  return arwin.length >= win ? 'Winner!' : 'Loser!'
}
//задача 26(112)
function rowWeights(array) {
  let number1 = array
    .filter((item, index, array) => {
      if (index % 2 === 0) {
        return array[index]
      }
    })
    .reduce((acc, item, index, arr) => {
      return (acc = acc + item)
    }, 0)
  let number2 = array
    .filter((item, index, array) => {
      if (index % 2 != 0) {
        return array[index]
      }
    })
    .reduce((acc, item, index, arr) => {
      return (acc = acc + item)
    }, 0)
  let ar = []
  ar.push(number1, number2)
  return ar
}
//задача 27(113)
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
//задача 28(114)
function expandedForm(num) {
  let ar = []
  let result = num.toString().split('')
  result.map((item, index, array) => {
    if (item != '0') {
      ar.push(item * 10 ** (array.length - 1 - index))
    }
  })
  return ar.join(' + ')
}
// задача 29 (115)
const arrCheck = value => {
  return value.every(item => Array.isArray(item))
}
console.log(arrCheck([{}, {}]))
//задача 30 (116)
function box(num) {
  let ar1 = []
  ar1.length = [num]
  ar1.fill('-', 0)

  let ar2 = []
  ar2.length = [num]
  ar2
    .fill()
    .fill('-', 0)
    .fill(' ', 1, num - 1)
  let result = []
  console.log(ar1, ar2)
  ar1.map((item, index) => {
    return index === num - 1 || index === 0
      ? result.push(ar1.join(''))
      : result.push(ar2.join(''))
  })

  return result
}
// задача 31 (117)
function findMagic(arr) {
  return arr.findIndex((item, index, array) => {
    return array[index] === index
  })
}
// задача 32 (118)
obfuscate = function (email) {
  return email
    .split('')
    .map(item => {
      if (item === '@') {
        return ' [at] '
      }
      if (item === '.') {
        return ' [dot] '
      } else {
        return item
      }
    })
    .join('')
}
// задача 33 (119)
function checkExam(array1, array2) {
  let result = array1
    .map((item, index, array) => {
      let result = 0
      if (array1[index] === array2[index]) {
        return (result += +4)
      }
      if (array1[index] != array2[index] && array2[index] != '') {
        return (result -= 1)
      }
      if (array2[index] === '') {
        return (result += 0)
      }
    })
    .reduce((acc, item) => {
      return acc + item
    })
  return result > 0 ? result : 0
}
// задача 34 (120)
//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce((acc, item, index, array) => {
    console.log(item[0], item[1], item[2])
    if (
      (item[0] === ':' || item[0] === ';') &&
      (item[1] === '-' ||
        item[1] === '~' ||
        item[1] === 'D' ||
        item[1] === ')') &&
      (item[2] === 'D' || item[2] === ')' || item[2] === undefined)
    ) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
}
//задача 31 (121)
function smallEnough(a, limit) {
  return a.every(item => item <= limit)
}
//задача 32 (200)
function rgb(r, g, b) {
  let result = [r, g, b]
  return result
    .map(item => {
      return item >= 0 && item <= 255
        ? item.toString(16)
        : Math.min(Math.max(item, 0), 255).toString(16)
    })
    .map(elem => {
      return elem.length < 2 ? '0' + elem : elem
    })
    .join('')
    .toUpperCase()
}
//задача 33 (201)
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
// задача 34 (202)
function getLengthOfMissingArray(arrayOfArrays) {
  if (
    arrayOfArrays === null ||
    arrayOfArrays.length === 0 ||
    arrayOfArrays.some(item => item === null || item.length === 0)
  ) {
    return 0
  }
  let result = arrayOfArrays
    .sort((a, b) => {
      return a.length > b.length ? 1 : -1
    })
    .map(item => item.length)

  for (let i = 0; i < result.length; i++) {
    if (result[i] + 1 != result[i + 1]) {
      return result[i] + 1
    }
  }
}
//задача 35 (203)
function dataReverse(data) {
  let result = []
  for (let i = 0; i <= data.length; i = i + 8) {
    {
      result.push(data.slice(i, i + 8))
    }
  }
  return result.reverse().flat()
}
//задача 36 (204)
function proofread(str) {
  return str
    .replace(/ie/gi, 'ei')
    .toLowerCase()
    .split('. ')
    .map(item => item[0].toUpperCase() + item.slice(1, item.length))
    .join('. ')
}
//задача 37 (205)
function formatWords(words) {
  if (
    words === null ||
    words === undefined ||
    words.join() === '' ||
    words.length === 0
  ) {
    return ''
  }
  {
    let ar = words.filter(
      item => item != null && item.length != 0 && item != '',
    )
    return ar.length === 1
      ? ar.join('')
      : ar.slice(0, ar.length - 1).join(', ') + ' and ' + ar.at(-1)
  }
}
//задача 38 (206)
function deleteDigit(n) {
  const result = n.toString().split('')
  return Math.max(
    ...result.map((item, index) => {
      const ar = [...result]
      ar.splice(index, 1)
      return +ar.join('')
    }),
  )
}
//задача 39 (207) мое решение
function findEvenIndex(arr) {
  let num1 = arr.map((item1, index1) => {
    return arr.slice(0, index1).reduce((acc2, item2) => {
      return (acc2 += item2)
    }, 0)
  })
  let num2 = arr.map((item3, index3) => {
    return arr.slice(index3 + 1, arr.length).reduce((acc3, item4) => {
      return (acc3 += item4)
    }, 0)
  })
  return [...num1, ...num2].findIndex((element, ind, ar) => {
    return ar[ind] === ar[ind + arr.length]
  })
}
// нормальное решение
function findEvenIndex(arr) {
  return arr.findIndex(
    (_, i) =>
      arr.slice(0, i).reduce((acc, c) => acc + c, 0) ===
      arr.slice(i + 1).reduce((acc, c) => acc + c, 0),
  )
}
