import React from 'react'
import './progressBar.css'
export  function ProgressBar({thresholds, value}) {
  const width = {width : 900 / thresholds.length}
  return (
    <div className='parentBar'>
      {thresholds.map(bar => {
        return <div className='progressBar'>
          <div className='topBlock'></div>
          <div className='centerBlock' style={width}></div>
          <div className='bottomBlock'>
            <div className='bottomBlockNull'>0</div>
            <div className='bottomBlockNumber'></div>
          </div>
        </div>
      })}
    </div>
  )
}
