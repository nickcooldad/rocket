import React from 'react'
import "./progressBar.css"

export function ProgressBar({thresholds, value}) {
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
    <div className='numberBigStar'>{value < 25 ? `${value}/25` : '25/25'}</div>
    <div className='numberStar'>{thresholds[1]}</div>
    <div className='numberStar'><div>{thresholds[2]}</div></div>
    <div  className='numberStar'><div>{thresholds[3]}</div></div>
    <div  className='numberStar'><div>{thresholds[4]}</div></div>
    <div  className='numberCup'><div>{thresholds[5]}</div></div>
    </div>
    </div>
    </div>
    </div>
  )
}
