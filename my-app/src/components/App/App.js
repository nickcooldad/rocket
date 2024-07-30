import './App.css'
import {useState} from 'react';
import Form from "../Form/Form";

function App() {
  const [todos, setTodos] = useState([])
  const putTodo = (value) => {
    if(value){
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
    } else{
      alert('Введите текст!')
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <Form
          putTodo = {putTodo} 
        />
        <ul className="todos"> {
          todos.map(element => {
            return (
              <li className='todo' key={element.id}>
                {element.text}
              </li>
            )
          })
          }
        </ul>
      </div>
      123
    </div>
  );
}

export default App;
