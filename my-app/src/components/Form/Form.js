import { useState } from 'react';
import './Form.css';


const Form = (props) => {

    const [value, setValue] = useState ("")
    
    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.putTodo(value)
            setValue("")
        }}> 
            <input type="text" placeholder='Введите текст...' className='input' value={value} onChange={e => setValue(e.target.value)} />
        </form>
    );
};

export default Form;