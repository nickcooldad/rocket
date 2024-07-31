
import { useState } from 'react';
import "./App.css"
import Counter from './components/counter';


function App() {
  const [count, setCount] = useState(0)

  


  return ( 
    <div className="home">
      <h1 className='title'>Поймано покемонов</h1>
      <h1 className='counter'>{`${count} /1053`}</h1>
      <div className='note'>
        <p1 className="line1">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      </p1>
        <p1 className="line2">  
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      </p1>
      </div>
    </div>
  );
}

export default App;
