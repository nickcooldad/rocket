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
// задача 40 (208)
function balance(book) {
  let result = book.replace(/[^a-zA-Z0-9.\s]/gi, '') // чистые строки
  total = 0
  ArRemains = []
  first = result.split('\n').filter(it => it.length > 0) // отфильтрованный массив из чистых строк
  first1 = +first[0] // баланс
  first.shift() // удаленный первый элемент
  remains = first1
  num = first
    .join('\n')
    .match(/\d+\.\d{1,2}/gi)
    .map(Number) // числа для вычисления остатка
  text = first.join('\n').replace(/\b\d+\.\d+\b/g, '') // текст без контрольных значений
  for (let i = 0; i < num.length; i++) {
    total += +num[i]
    ArRemains.push((remains -= num[i]).toFixed(2))
  }
  let check = text
    .split('\n')
    .filter(item => item.length > 0)
    .map((element, index, array) => {
      return `${array[index]}${num[index].toFixed(2)} Balance ${
        ArRemains[index]
      }`
    })
    .join('\r\n')
  return `Original Balance: ${first1.toFixed(
    2,
  )}\r\n${check}\r\nTotal expense  ${total.toFixed(2)}\r\nAverage expense  ${(
    total / num.length
  ).toFixed(2)}`
}
//задача 41 (209)
function indexEqualsValue(arr) {
  let start = 0
  let end = arr.length - 1
  let result = -1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === mid) {
      result = mid
      end = mid - 1 // Проверяем более низкий индекс с тем же значением
    } else if (arr[mid] < mid) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return result
}
// задача 42 (210)
function validParentheses(parenStr) {
  let curr = 0
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') {
      curr++
    } else {
      curr--
    }
    if (curr < 0) {
      return false
    }
  }
  return curr === 0
}
//задача 43 (211)
function calculate(expression) {
  if (expression.split('').every(item => item != ' ' && +item != NaN)) {
    return parseFloat(expression)
  }
  {
    let token = expression.split(' '),
      num = []

    for (let i = token.length - 1; i >= 0; i--) {
      if (!isNaN(parseFloat(token[i]))) {
        num.push(+token[i])
      } else {
        let num1 = num.pop(),
          num2 = num.pop()
        if (token[i] === '+') {
          num.push(num1 + num2)
        }
        if (token[i] === '-') {
          num.push(num1 - num2)
        }
        if (token[i] === '*') {
          num.push(num1 * num2)
        }
        if (token[i] === '/') {
          num.push(num1 / num2)
        }
      }
    }
    return num[0]
  }
}
//задача 44 (212)
var runLengthEncoding = function (str) {
  let string = str.split(''),
    result = [],
    j = 1
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      j += 1
    }
    if (string[i] != string[i + 1]) {
      result.push([j, string[i]])
      j = 1
    }
  }
  return result
}
//задача 45 (213)
function isPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
//задача 46 (214)
function zeroPlentiful(arr) {
  let j = 1,
    result = []
  if (arr.length < 4) {
    return 0
  }
  {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0 && arr[i] === arr[i + 1]) {
        j += 1
      }
      if (arr[i] === 0 && arr[i] != arr[i + 1]) {
        result.push(j)
      }

      if (arr[i] != 0 && arr[i] != arr[i + 1]) {
        result.push(0)
        j = 1
      }
    }
  }
  return result.filter(item => item > 0).every(elem => elem >= 4)
    ? result
        .filter(el => el >= 4)
        .reduce(acc => {
          return (acc += 1)
        }, 0)
    : 0
}
//задача 47 (215)
function kebabize(str) {
  return str
    .replace(/[^\D]/g, '')
    .split(/(?=[A-Z])/)
    .map(item => item.toLowerCase())
    .join('-')
}
//задача 48 (216)
function abbreviate(string) {
  return string
    .split(/(?=\W)/g)
    .map(item => {
      if (item.replace(/\s/, '').length <= 3) {
        return item
      }
      if (item[0] != item.replace(/[a-zA-Z]/g, '')) {
        return `${item[0]}${item.length - 2}${item[item.length - 1]}`
      } else {
        return `${item[0]}${item[1]}${item.length - 3}${item[item.length - 1]}`
      }
    })
    .join('')
}
//задача 49 (217)
function isValidIP(str) {
  return str.split('.').every((item, index, array) => {
    if (item.length === 1 && array.length === 4 && item >= 0) {
      return true
    }
    if (
      item.length > 1 &&
      array.length === 4 &&
      item.replace(/\d/g, '') === ''
    ) {
      return item[0] != 0 && item >= 1 && item <= 255
    }
  })
}
//задача 50 (218)
function incrementString(string) {
  let text = [],
    number = [],
    lastindex = string
      .split('')
      .findLastIndex(item => item.replace(/[a-zA-Z]/g, '') === '') // крайний индекс где начинается текст
  string.split('').map((elem, index) => {
    index <= lastindex ? text.push(elem) : number.push(elem) // заполняем массивы текстои и числами
  })
  return `${text.join('')}${
    number.length === 0
      ? 1
      : (+number.join('') + 1).toString().padStart(number.length, '0') // padStart заполняет нулями
  }`
}
//задача 51 (219)
var format = function (str, obj) {
  Array.isArray(obj)
    ? (obj = obj.reduce((acc, item, index) => {
        acc[index] = item
        return acc
      }, {}))
    : obj
  return str
    .split(' ')
    .map(item => {
      for (let key in obj) {
        if (item.includes(`{${key}}`)) {
          return item.replace(`{${key}}`, obj[key])
        }
      }
      {
        return item
      }
    })
    .join(' ')
}
//задача 52 (300)
function hexStringToRGB(hexString) {
  let obj = {
    r: parseInt(hexString.slice(1, 3), 16),
    g: parseInt(hexString.slice(3, 5), 16),
    b: parseInt(hexString.slice(5), 16),
  }
  return obj
}
//задача 53 (301)
function DNAStrand(dna) {
  let obj = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }
  return dna
    .split('')
    .map(function (key) {
      return obj[key]
    })
    .join('')
}
//Задача 54 (302)
function scoreboard(string) {
  let score = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  return string
    .split(' ')
    .map(item => score[item])
    .filter(elem => typeof elem === 'number')
}
//задача 55 (303)
function outed(meet, boss) {
  let result = 0
  for (let key in meet) {
    key === boss ? (result += meet[key] * 2) : (result += meet[key])
  }
  return result / Object.keys(meet).length <= 5
    ? 'Get Out Now!'
    : 'Nice Work Champ!'
}
