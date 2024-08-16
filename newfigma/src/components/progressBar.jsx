import React from 'react'
import './progressBar.css'

export  function ProgressBar({thresholds, value}) {
  const width = {width : 900 / thresholds.length}
  const widthTopBlockAndBottom = {width: 900/thresholds.length + 10}
  return (
    <div className='parentBar' >
      {thresholds.map((bar, index) => {
        const [first, last] = [index, thresholds.length - 1]
        return <div className='progressBar' style={width}>
          <div className='topBlock' style={widthTopBlockAndBottom}>
            {first !== last ? <img src='/images/star.svg'alt='star'/> : <img src='/images/cup.svg'alt='cup'/>}
          </div>
          <div className='centerBlock' style={
            { borderRight: index !== thresholds.length - 1 ? '2px solid gray' : '',
              borderTopLeftRadius: index === 0 ? '25px' : '',
              borderBottomLeftRadius: index === 0 ? '25px' : '',
              borderTopRightRadius: index === thresholds.length - 1 ? '25px' : '',
              borderBottomRightRadius: index === thresholds.length - 1 ? '25px' : ''
            }
            }></div>
          <div className='bottomBlock' style={widthTopBlockAndBottom}>
            <div className='bottomBlockNull'>{index === 0 || (index === 0 && index === thresholds.length - 1) ? '0' : ''}</div>
            <div className='bottomBlockNumber'>{bar}</div>
          </div>
        </div>
      })}
    </div>
  )
}
