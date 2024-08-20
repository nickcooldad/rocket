
import './App.css';
import { useState } from 'react';

function App() {

const [iputValue, setInputValue] = useState({rgb1:'#FFFFFF', rgb2 : '#FFFFFF'})
const [tempValue, setTempValue] = useState({rgb1:'#FFFFFF', rgb2 : '#FFFFFF'})


const hundleChangeFirst = (event) =>{
  setTempValue(prev => ({...prev, rgb1: event.target.value}))
}
const hundleChangeLast = (event) => {
  setTempValue(prev => ({...prev, rgb2: event.target.value}))
  
}
const hundleSubmit = (event) =>{
  event.preventDefault();
  setInputValue(tempValue)

}
return (

    <div className="buttonsRgb" style={{ background: `linear-gradient(to bottom, ${tempValue.rgb1} 50%, ${tempValue.rgb2} 50%)` }}>
        <div className='inputs'>
        <input className="firstColor" placeholder='RGB' onChange={hundleChangeFirst}/>
        <input className="lastColor" placeholder='RGB' onChange={hundleChangeLast}/>
      </div>
      <button className="goGradient" onClick={hundleSubmit}>PAINT</button>
        </div>
        
  );
}

export default App;
