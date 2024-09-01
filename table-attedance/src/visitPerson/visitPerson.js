export function visitPerson(vacations) {
  let result = {};
  vacations.forEach(vacation => {
    const [startVacation, endVacation] = vacation;
    const [firstDay, firstMonth, firstYear] = startVacation.split('.');
    const [lastDay, lastMonth, lastYear] = endVacation.split('.');
    const yearStartKey = `20${firstYear}`;
    const yearEndKey = `20${lastYear}`;
    
    result[yearStartKey] ??= {};
    result[yearEndKey] ??= {};

    const addDays = (yearKey, month, startDay, endDay) => {
      result[yearKey][month] ??= new Set()
      result[yearKey][month] = new Set([...result[yearKey][month], ...numbersDayInMonth(startDay, endDay)])
    }
    if (firstYear === lastYear) {
      if (firstMonth === lastMonth) {
        addDays(yearStartKey, firstMonth, firstDay, lastDay);
      } else {
          addDays(yearStartKey,firstMonth, firstDay, 31)
          addDays(yearStartKey,lastMonth, 1, lastDay)
      }
    } else {
        addDays(yearStartKey, firstMonth, firstDay, 31)
        addDays(yearEndKey, lastMonth, 1, lastDay)
    }
  });
  return result;
}



function numbersDayInMonth(firstDay, lastDay){
  const days = new Set()
  let counter = Number(firstDay)
  new Array(lastDay - firstDay + 1).fill(null).forEach(() => {
    days.add(counter)
    counter++
  })
  
  return days
}

const vacations = [
    ["21.04.24", "24.04.24"],
    ["06.05.24", "13.05.24"],
    ["24.05.24", "08.06.24"],
    ["28.06.24", "18.07.24"],
    ["28.12.23", "04.01.24"],
    ['07.12.24', '29.01.25']
  ]

  console.log(visitPerson(vacations))
// obj[2023][2].inludes(5);
// obj["2023.02"].inludes(5);



//   console.log(
//     {
//     2024 : {
//       1 : new Set([1, 2, 3, 4]), 4
//       4 : new Set([21, 22, 23, 24]), 4
//       5 : new Set([6, 7, 8, 9, 10, 11, 12, 13, 24, 25, 26, 27, 28, 29, 30, 31]), 16
//       6 : new Set([1, 2, 3, 4, 5, 6, 7, 8, 28, 29, 30, 31]), 12
//       7 : new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]), 18
//     },
//     2023 : {
//       12 : new Set([28, 29, 30, 31]) 
//     }
// }
//   )

  // тесты бибилотека jest