
import { useState } from 'react';
import "./App.css"
import {Counter, Sum} from './components/counter';


function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return ( 
    <div className="home">
      <h className='title'>Поймано покемонов</h>
      <Sum count={count}/>
      <div className='note'>
        <p1 className="line1">
      <Counter incrementCount={incrementCount}/>
      <Counter incrementCount={incrementCount}/>
      <Counter incrementCount={incrementCount}/>
      <Counter incrementCount={incrementCount}/>
      </p1> 
        <p1 className="line2">  
      <Counter incrementCount={incrementCount}/>
      <Counter incrementCount={incrementCount}/>
      <Counter incrementCount={incrementCount}/>
      <Counter incrementCount={incrementCount}/>
      </p1>
      </div>
    </div>
  );
}

export default App;
