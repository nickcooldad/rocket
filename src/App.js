
import { useState } from 'react';
import "./App.css"
import {Counter, Sum} from './components/counter';
const pokemons = [
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

function App() {
  const [caughtPokemons, setCaughtPokemons] = useState([])

  const checked = (pokemon) => {
    if(caughtPokemons.includes(pokemon)){
      setCaughtPokemons(caughtPokemons.filter(item => item !== pokemon))
    } else {
      setCaughtPokemons([...caughtPokemons, pokemon])
    }
  }

  return ( 
    <div className="home">
      <h className='title'>Поймано покемонов</h>
      <h1 className='counter'>{`${caughtPokemons.length} / ${pokemons.length}`}</h1>
      <div className='note'>{
        pokemons.map(pokemon => {
          return <Counter checked={() => checked(pokemon.name)} id={pokemon.id} name={pokemon.name} caught={caughtPokemons.includes(pokemon.name)}/>
        })
        }
      </div>
    </div>
  );
}

export default App;
