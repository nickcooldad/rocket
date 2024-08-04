
import { useState } from 'react';
import "./counter.css"


export const Counter = ({ incrementCount, dicrementCount, name, id }) => {

  const [caught, setCaught] = useState(false)

  const hundleClick = () => {
    setCaught(!caught)
    
    if (!caught) {
      incrementCount()
    } else {
      dicrementCount()
    }
  }

  return (
    <div className={caught ? 'pokemon caught' : 'pokemon'}>
      <h1 className="titleName">{name}</h1>
      <div className="photo">
        <img className="resized-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
      </div>
      <button className="botton" onClick={hundleClick}>{caught ? "ОТПУСТИТЬ" : 'ПОЙМАТЬ'}</button>
    </div>
  )
}




