
import { useState, useCallback } from 'react';
import "./App.css"
import {Pokemon} from './components/pokemon';
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
].slice(0, 3)

async function catchPokemonApi(id) {
  await new Promise(resolve => setTimeout(resolve, 1000));
}
 
async function fetchPokemons(){
 const result = await fetch('https://pokeapi.co/api/v2/pokemon/')
 console.log((await result.json()).results)

 // [{name, url}] → [{name, id}]
}
// GET https://pokeapi.co/api/v2/pokemon/
// https://pokeapi.co/api/v2/pokemon/20/
//                                   id

// 1. Кнопка загрузки покемонов
// 2. По нажатию на кнопку вызываем fetchPokemons
// 3. Меняем стейт со списком покемонов (это еще один стейт)
// 4. Наверху показывать сколько всего покемонов (1302)


// 5*. Сделать кнопки вперед-назад
//     Загружать следующие/предыдущие 12 покемонов
//     Изначально рисуем 1-12, потом кликаем вперед и рисуем 13-24 и т.д.

//    https://pokeapi.co/api/v2/pokemon/?offset=30&limit=20



function App() {
  console.log("🎨 App")
  const [caughtPokemons, setCaughtPokemons] = useState([])

  const catchOrReleasePokemon = async (pokemon) => {
    catchPokemonApi().catch(() => {
      // ...
      // reset state changes
    })
    // if(caughtPokemons.includes(pokemon)){
    //   setCaughtPokemons(caughtPokemons.filter(item => item !== pokemon))
    // } else {
    //   setCaughtPokemons([...caughtPokemons, pokemon])
    // }
    
    setCaughtPokemons(prev => {
      if(prev.includes(pokemon)){
        return prev.filter(item => item !== pokemon);
      } else {
        return [...prev, pokemon];
      }
    })
  }

  // const catchOrReleasePokemon = useCallback((pokemon) => {
  //   if(caughtPokemons.includes(pokemon)){

  //     setCaughtPokemons(caughtPokemons.filter(item => item !== pokemon))
  //   } else {
  //     setCaughtPokemons([...caughtPokemons, pokemon])
  //   }
  // }, []);
  
  return ( 
    <div className="home">
      <h className='title'>Поймано покемонов</h>
      <h1 className='counter'>{`${caughtPokemons.length} / ${pokemons.length}`}</h1>
      <button onClick={fetchPokemons}>+</button>
      <div className='note'>{
        pokemons.map(pokemon => {
          return <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            // catchOrReleasePokemon={() => {}}
            catchOrReleasePokemon={catchOrReleasePokemon}
            caught={caughtPokemons.includes(pokemon.id)}
          />
        })
        }
      </div>
    </div>
  );
}

export default App;
