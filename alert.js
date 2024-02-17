'use strict'

function balance(book) {
  const [firstLine, ...lines] = book
    .replace(/[^a-zA-Z0-9.\s]/gi, '')
    .split('\n')
    .filter(it => it.length > 0)

  const originalBalance = +firstLine
  const result = []
  let balance = originalBalance

  for (const line of lines) {
    const [number, name, priceStr] = line.split(' ')
    const price = +priceStr

    balance -= price
    result.push(
      `${number} ${name} ${price.toFixed(2)} Balance ${balance.toFixed(2)}`,
    )
  }
  const totalExpense = originalBalance - balance
  const averageExpence = totalExpense / lines.length

  result.unshift(`Original Balance: ${originalBalance.toFixed(2)}`)
  result.push(`Total expense  ${totalExpense.toFixed(2)}`)
  result.push(`Average expense  ${averageExpence.toFixed(2)}`)

  return result.join('\r\n')

  // let total = 0
  // let ArRemains = []

  // remains = first1
  // num = first
  //   .join('\n')
  //   .match(/\d+\.\d{1,2}/gi)
  //   .map(Number) // числа для вычисления остатка
  // text = first.join('\n').replace(/\b\d+\.\d+\b/g, '') // текст без контрольных значений
  // for (let i = 0; i < num.length; i++) {
  //   total += +num[i]
  //   ArRemains.push((remains -= num[i]).toFixed(2))
  // }
  // let check = text
  //   .split('\n')
  //   .filter(item => item.length > 0)
  //   .map((element, index, array) => {
  //     return `${array[index]}${num[index].toFixed(2)} Balance ${
  //       ArRemains[index]
  //     }`
  //   })
  //   .join('\r\n')
  // return `Original Balance: ${first1.toFixed(
  //   2,
  // )}\r\n${check}\r\nTotal expense  ${total.toFixed(2)}\r\nAverage expense  ${(
  //   total / num.length
  // ).toFixed(2)}`
}

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

console.log(balance(b1))

// var b2sol = `Original Balance: 1233.00\r
// 125 Hardware 24.80 Balance 1208.20\r
// 123 Flowers 93.50 Balance 1114.70\r
// 127 Meat 120.90 Balance 993.80\r
// 120 Picture 34.00 Balance 959.80\r
// 124 Gasoline 11.00 Balance 948.80\r
// 123 Photos 71.40 Balance 877.40\r
// 122 Picture 93.50 Balance 783.90\r
// 132 Tyres 19.00 Balance 764.90\r
// 129 Stamps 13.60 Balance 751.30\r`
// 129 Fruits 17.60 Balance 733.70\r
// 129 Market 128.00 Balance 605.70\r
// 121 Gasoline 13.60 Balance 592.10\r
// Total expense  640.90\r
// Average expense  53.41`
