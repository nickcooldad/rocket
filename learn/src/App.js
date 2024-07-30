
import { useState } from 'react';
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(count + 1)
  }
  


  return (
    <div className="home">
      <h1 className='title'>Поймано покемонов</h1>
      <h1 className='counter' onClick={counter}>{`${count} /1053`}</h1>
    </div>
  );
}

export default App;
