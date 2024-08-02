
import { useState } from 'react';
import "./counter.css"


const Counter = ({incrementCount}) => {
const names = [
    {
      name: "bulbasaur",
      id: "1"
    },
    {
      name: "ivysaur",
      id: "2"
    },
    {
      name: "venusaur",
      id: "3"
    },
    {
      name: "charmander",
      id: "4"
    },
    {
      name: "charmeleon",
      id: "5"
    },
    {
      name: "charizard",
      id: "6"
    },
    {
      name: "squirtle",
      id: "7"
    },
    {
      name: "wartortle",
      id: "8"
    },
    {
      name: "blastoise",
      id: "9"
    },
    {
      name: "caterpie",
      id: "10"
    },
    {
      name: "metapod",
      id: "11"
    },
    {
      name: "butterfree",
      id: "12"
    },
    {
      name: "weedle",
      id: "13"
    },
    {
      name: "kakuna",
      id: "14"
    },
    {
      name: "beedrill",
      id: "15"
    },
    {
      name: "pidgey",
      id: "16"
    },
    {
      name: "pidgeotto",
      id: "17"
    },
    {
      name: "pidgeot",
      id: "18"
    },
    {
      name: "rattata",
      id: "19"
    },
    {
      name: "raticate",
      id: "20"
    }
  ]
const [clickState, setClickState] = useState('ПОЙМАТЬ')
const [currenIndex, setCurrentIndex] = useState(0)

const hundleClick = () => {
  if(clickState === "ПОЙМАТЬ")
    {
    incrementCount()
    setClickState('ОТПУСТИТЬ')
  } else{
    setClickState('ПОЙМАТЬ')
    setCurrentIndex((currenIndex + 1) % names.length)
  }
}

    return (
        <div className={clickState === 'ПОЙМАТЬ' ? 'card1' : 'card2'}>
            <h1 className="titleName">{names[currenIndex].name}</h1>
            <div className="photo">
            <img className="resized-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currenIndex + 1}.png`} alt="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
            </div>
            < BottonState value={clickState} handleClick={hundleClick}/>
        </div>
    )
}



const BottonState = ({value, handleClick}) => {
    return (
        <>
            <button className="botton" onClick={ handleClick}>{value}</button>
        </>
    )
}

const Sum = ({count}) =>{
    return (
        <>
        <h1 className='counter'>{`${count} /1053`}</h1>
        </>
    )
}

export  {Counter, Sum }


