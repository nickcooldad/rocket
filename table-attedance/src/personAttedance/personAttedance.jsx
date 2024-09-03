import React from 'react'
import s from './personAttedance.module.css'
import { visitPerson } from '../visitPerson/visitPerson';
//console.log(s);
 
export function PersonAttedance({employees, numberDaysMoth, month, year}) {
  const days = new Array(numberDaysMoth).fill(null).map((_, index) => index + 1)
  const styleAttedance = 
  {
    backgroundColor : '#fcdf03' 
  }


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
            console.log(vacation)
            return <div className={s.centerBlock}>
              <div className={s.fullName}>{person.name}</div>
              <div className={s.tableNumbers}>
              {
                days.map((day) => {
                  console.log('++')
                  return <div className={s.block} style={vacation[year] !== undefined && vacation[year][month] !== undefined && vacation[year][month].has(day) ? styleAttedance : {}}></div>
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
