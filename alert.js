function bingo(ticket, win) {
  let arwin = ticket.filter(item =>
    item.some((item, index, array) => {
      return array[0].charCodeAt(index) === array[1]
    }),
  )
  return arwin.length >= win ? 'Winner!' : 'Loser!'
}

console.log(
  bingo(
    [
      ['YFW', 73],
      ['TCDWPO', 87],
      ['XQ', 90],
      ['JLEFYL', 87],
      ['MMUG', 79],
      ['NG', 81],
      ['FB', 70],
      ['OOLB', 86],
    ],
    2,
  ),
)
