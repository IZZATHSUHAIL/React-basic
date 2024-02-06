import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import './App.css';


const Content =()=>{

//   useEffect(()=>({

//   }),[])
const [items, setItems] = useState([
  { id: 1, checked: false, item: "ReactJs" },
  { id: 2, checked: false, item: "Javascript" },
  { id: 3, checked: false, item: "Css" },
]);

  
 
  console.log(items,"itemstate")
  
 const [newitem,setNewItem]=useState([])

  const addItem=(item)=>{
    const id= items.length ?items[items.length-1].id+1:1;
    const addNewItem={id,checked:false,item}
    // const updatedItems={...items,addNewItem}
    console.log(...items,addNewItem)
    setItems([...items,addNewItem])
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newitem) return;
    console.log(newitem,'newitem');
    setNewItem('')
    addItem(newitem)
  } 


  const handlecheck=(id)=>{
    const listitems=items.map((item)=> item.id===id?{...item,checked:!item.checked}:item)
    setItems(listitems)
  }
  const Delete=(id)=>{
    const deleteitem=items.filter((item)=>item.id!=id)
    setItems(deleteitem)
  }

  
  


return(
  <>
  <main>
    <div className='Todo'>
    <header id='head'>To-do List</header>
  
          <form className='addform' onSubmit={handleSubmit}>
          <label htmlFor="add-item">Add item</label>
          <input 
          autoFocus
          type="text"
          id='additem'
          placeholder='Add item'
          required
          value={newitem}
          onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type='submit'
          
            aria-label="Add item">
                <FaPlus/>
        </button>
        </form>


    {(items.length)?(
    <ul>
        {items.map((item)=>(
          <li className='item' key={item.id}>
            <input 
            type='checkbox'
            onChange={()=>handlecheck(item.id)}
            checked={item.checked} />
            <label 
            style={(item.checked)?{textDecoration:'line-through'}:null}
            onClick={()=>{handlecheck(item.id)}}>{item.item}</label>
            <FaTrashAlt id='Del'
            role='button'
            onClick={()=>Delete(item.id)}
            tabIndex='0'/>
          </li>
        ))}
    </ul>
):
(<p id='none'>No Items</p>)
        }
        </div>
 <footer id='foot'>Chola &copy; 2024</footer>
        </main>
        </>
  );
      
      }

export default Content
















// import './App.css';

// function TodoList () {
//   const [todos, setTodos] = useState([])
//   const [inputValue, setInputValue] = useState('')

// function handleChange(e){
//   setInputValue(e.target.value)
// }

// function handleSubmit(e){
//   e.preventDefault()
//   setTodos([...todos, inputValue])
//   setInputValue('')
// }
//   return (
//     <div id='divb'>
      
//       <h1>Todo List</h1>
//       <form>
//         <input type='text' value={inputValue} onChange={handleChange}/>
//         <button onClick={handleSubmit}>Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo}>{todo}
//            <button>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TodoList