
import { useState } from 'react';
import "./counter.css"


export const Counter = ({ name, id, caught, checked}) => {

  return (
    <div className={caught ? 'pokemon caught' : 'pokemon'}>
      <h1 className="titleName">{name}</h1>
      <div className="photo">
        <img className="resized-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
      </div>
      <button className="botton" onClick={checked}>{caught ? "ОТПУСТИТЬ" : 'ПОЙМАТЬ'}</button>
    </div>
  )
}




