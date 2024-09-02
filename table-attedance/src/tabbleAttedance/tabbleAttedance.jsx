import React, { useState } from 'react'
import { mothList } from '../defenitionOnDayInYear/mothList'
import { defineInDays } from '../defenitionOnDayInYear/defineInDays'
import { PersonAttedance } from '../personAttedance/personAttedance';
import { visitPerson } from '../visitPerson/visitPerson';
import './tabbleAttedance.css'

export function TabbleAttedance({employees}) {

const [mothAndYear, setMothAndYear] = useState({moth: 0, year: 2024})


  return (
    <div>
        <div className="table">
        <div className="topBlock">
          <button className='buttonLeft' >
              <img src='/images/arrow.svg' alt='arrowLeft' className="imgButtonLeft"/>
          </button>
          <div className="mothYear">{`${mothList[mothAndYear.moth]} 2024`}</div>
          <button className='buttonRight'>
              <img  src='/images/arrow.svg' alt='arrowRight' className="imgButtonRight"/>
          </button>
        </div>
        <div className='tableAttedance'>{
           <PersonAttedance employees={employees} numberDaysMoth={defineInDays()} mothList={mothList}/>
          }</div>
      </div>
    </div>
  )
}
