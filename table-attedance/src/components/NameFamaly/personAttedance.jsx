import React from 'react'
import s from './personAttedance.module.css'

//console.log(s);
 
export function PersonAttedance({employees, numberDaysMoth}) {
//console.log('++', numberDaysMoth)
  const days = new Array(numberDaysMoth).fill(null).map((_, index) => index + 1)
console.log(days)
  return (
    <div classname={s.fullNameAndTable}>
      <div className={s.topBlock}>
        <div className={s.emptyBlock}>
        </div>
        <div className={s.days}>{
          days.map((day) => {
            return <div className={s.day}>{day}</div>
          })
          }</div>
      </div>
        {
          employees.map(person => {
            return <div className={s.centerBlock}>
              <div className={s.fullName}>{person.name}</div>
              <div className={s.tableNumbers}>{days.map((day) => {
                return <div className={s.block}></div>
              })}</div>
            </div>
          })
        }
      
      </div>
  )
}
