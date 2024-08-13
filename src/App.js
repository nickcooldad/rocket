
import { useState, useCallback, useEffect } from 'react';
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

// async function catchPokemonApi(id) {
//   await new Promise(resolve => setTimeout(resolve, 1000));
// }
async function fetchPokemons(offset, limit){
return await(await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)).json()
}
//counter = await resultJson.count
 //console.log(await resultJson.next, await resultJson.results)
 //link = await resultJson.next
 
//  pokemonsList = await resultJson.results.map(pokemon => {
//   let index = -2
//   while(pokemon.url.at(index) !== '/'){
//     index--
//   }
  //return {name : pokemon.name, id : pokemon.url.slice(index + 1, -1)}
// })
 //console.log(pokemonsList)
//  const links = (await result.json()).next
//  return ((await result.json()).result)
//  const listPokemons = (await result.json().results)
 // [{name, url}] → [{name, id}]
   
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
  const [list, setList] = useState([[], 0,{offset:0, limit:12}])

  // useEffect( async () =>{
  //   setList(await fetchPokemons())}
  // ,[])

  const hundleClickBotton = async () => {
    setList([(await fetchPokemons(list.at(-1).offset, list.at(-1).limit)),
      (await fetchPokemons(list.at(-1).offset, list.at(-1).limit)).count,
      {offset : 0, limit: 12}])
  }
  const hundleClickBottonBack = async () => {
    setList([(await fetchPokemons(list.at(-1).offset - 12, list.at(-1).limit)), 
      (await fetchPokemons(list.at(-1).offset, list.at(-1).limit)).count, 
      {offset : list.at(-1).offset -= 12, limit: 12}])
  }

  const hundleClickBottonNext = async () => {
    setList([(await fetchPokemons(list.at(-1).offset + 12, list.at(-1).limit)), 
      (await fetchPokemons(list.at(-1).offset, list.at(-1).limit)).count, 
      {offset : list.at(-1).offset += 12, limit: 12}])
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchPokemons()
  //     setList(data)
  //   }
  //   fetchData()
  // },[])
  const pokemonsList = list[0].length === 0 ? [] :
    list[0].results.map(pokemon => {
    let index = -2
    while(pokemon.url.at(index) !== '/'){
      index--
    }
    return {name : pokemon.name, id : pokemon.url.slice(index + 1, -1)}
  })

  console.log(pokemonsList)
  const catchOrReleasePokemon = async (pokemon) => {
    // catchPokemonApi().catch(() => {
    //   // ...
    //   // reset state changes
    // })
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

//   const pokemonsList = list.results.map(pokemon => {
//   let index = -2
//   while(pokemon.url.at(index) !== '/'){
//     index--
//   }
//   return {name : pokemon.name, id : pokemon.url.slice(index + 1, -1)}
// })

  return ( 
    <div className="home">
      <h1 className='title'>Поймано покемонов</h1>
      <h1 className='counter'>{`${caughtPokemons.length} / ${list[1]}`}</h1>
      <button className='fetchButton' onClick={hundleClickBotton} disabled={list.at(-2) > 0} >Загрузить список покемонов</button>
      <div className='buttonsNextAndBack'>
      <button className='fetchButtonNext' onClick={hundleClickBottonBack} disabled={list.at(-1).offset === 0} >Назад...</button>
      <button className='fetchButtonBack'onClick={hundleClickBottonNext} >Вперед...</button>
      </div>
      <div className='note'>{
        pokemonsList.map(pokemon => {
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
