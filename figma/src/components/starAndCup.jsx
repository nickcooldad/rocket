import React from 'react'
import "./starAndCup.css"

export function StarAndCup() {
  return (
    <div className='rating'>
    <div className='topBlock'>
      <img className='star1' src='./images/bigStar.svg' alt='big star'/>
      <img className='star2' src='./images/Star.svg' alt='star'/>
      <img className='star3' src='./images/Star.svg' alt='star'/>
      <img className='star4' src='./images/Star.svg' alt='star'/>
      <img className='star5' src='./images/Star.svg' alt='star'/>
       <img className='cup' src='./images/cup.svg' alt='cup'/>
    </div>
          


    <div className='restangle'>
      <div className='lines'>
      <div className='lineBigStar'>
        <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='lineStar'>
      <div className='line'></div>
      </div>
      <div className='cupLine'>
      <div className='line5'></div>
      </div>
      </div>
      
      <div className='bottomBlockNumber'>
      <div className='bottomBlockNull'>0</div>
    <div className='bottomBlock'>
    <div className='numberBigStar'>20/25</div>
    <div className='numberStar'>50</div>
    <div className='numberStar'><div>100</div></div>
    <div  className='numberStar'><div>200</div></div>
    <div  className='numberStar'><div>500</div></div>
    <div  className='numberCup'><div>1000</div></div>
    </div>
    </div>
    </div>
    </div>
  )
}
