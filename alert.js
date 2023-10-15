function bingo(ticket, win) {
  let arwin = ticket.filter(item1 =>
    item1[0].split('').some((item, index, array) => {
      console.log(item, item1[1])
      return array[index].charCodeAt(0) === item1[1]
    }),
  )
  return arwin.length >= win ? 'Winner!' : 'Loser!'
}

console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1,
  ),
)
