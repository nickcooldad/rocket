import React from 'react'
import s from './personAttedance.module.css'
import { visitPerson } from '../visitPerson/visitPerson';
//console.log(s);
 
export function PersonAttedance({employees, numberDaysMoth, mothList}) {
console.log('++', numberDaysMoth)
  const days = new Array(numberDaysMoth).fill(null).map((_, index) => index + 1)

  console.log(visitPerson(employees[0].vacations))

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
              <div className={s.tableNumbers}>{days.map((day) => {
                return <div className={s.block}></div>
              })}</div>
            </div>
          })
        }
        </div>
      </div>
  )
}
