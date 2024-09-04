import React from 'react'
import s from './personAttedance.module.css'
import { visitPerson } from '../visitPerson/visitPerson';
import { vacationAllDay } from '../visitPerson/vacationAllDay';
import { vacationDay } from '../visitPerson/vacationDay';
//console.log(s);
 
export function PersonAttedance({employees, numberDaysMoth, month, year}) {
  const days = new Array(numberDaysMoth).fill(null).map((_, index) => index + 1)
  const styleAttedance = 
  {
    backgroundColor : '#fcdf03' 
  }
  
  const styleAttedanceAll = 
  {
    backgroundColor : 'red'
  }

const vacation2 = [
  ['29.12.24', '05.01.25'],
  ['01.01.2024', '01.03.2024']
]
console.log(visitPerson(vacation2))
  return (
    <div classname={s.fullNameAndTable}>
      <div className={s.topBlock}>
        <div className={s.emptyBlock}></div>
           <div className={s.days}>{
             days.map((day) => {
               return <div className={s.day}>{day}</div>
                })
             }
          </div>
      </div>
        <div className='centerBlock'>
        {
          employees.map(person => {
            const vacation = visitPerson(person.vacations)
            return <div className={s.centerBlock}>
              <div className={s.fullName}>{person.name}</div>
              <div className={s.tableNumbers}>
              {
                days.map((day) => {
                  return <div className={s.block} style={
                    vacationAllDay(employees, day, month, year) 
                    ? styleAttedanceAll : vacationDay(vacation, day, month, year) 
                    ? styleAttedance : {}
                  }></div>
                })
              }
              </div>
            </div>
          })
        }
        </div>
      </div>
  )
}
