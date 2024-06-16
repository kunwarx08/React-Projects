import { useState } from 'react'
import '../App.css'

// function Todo(){
  
//     const [text,setText]=useState([])
//     const appendText = ()=>{
//         setText('item'+text)
//     }

//     // const popText = ()=>{
//     //     addText(text-'item')
//     // }

//     const removeText = () => {
//         setText(prevText => {
//           // Find the last occurrence of 'item' and remove it
//           const index = prevText.lastIndexOf('item');
//           if (index !== -1) {
//             return prevText.slice(0, index) 
//           }
//           return prevText; // If 'item' is not found, return the text as is
//         });
//       };

      
//     return (
//       <div>
//         <input type="text" />
//         <button onClick={appendText}>Add Todo</button>
//         <button onClick={removeText}>Remove Todo</button>
//         <h1>{text}</h1>
//         <ul>
//           {text}
//         </ul>
//       </div>
//     );
//   }
function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const addTodo = () => {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  
    const deleteTodo = (index) => {
      setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Todo;


