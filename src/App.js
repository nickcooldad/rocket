
import { useState } from 'react';
import "./App.css"
import Counter from './components/counter';


function App() {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount( count + 1)
  }
  


  return ( 
    <div className="home">
      <h1 className='title'>Поймано покемонов</h1>
      <h1 className='counter'>{`${count} /1053`}</h1>
      <div className='note'>
      <Counter className="note"/>
      <Counter className="note"/>
      <Counter className="note"/>
      <Counter className="note"/>
      <Counter className="note"/>
      <Counter className="note"/>
      <Counter className="note"/>
      <Counter className="note"/>
      </div>
      
    </div>
  );
}

export default App;
