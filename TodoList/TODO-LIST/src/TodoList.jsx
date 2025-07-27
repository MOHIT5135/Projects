import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos] = useState([]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask=()=>{
        setTodos((prevValue) =>{
            return[...prevValue,{id: uuidv4(), task:newTodo}];
        })
        setNewTodo("");
    };
    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) =>{
        setTodos((preTask)=> todos.filter((preTask) => preTask.id != id)) 
    }
    return (
        <div>
            <div>
                <input placeholder="Enter tasks" value={newTodo} onChange={updateTodoValue}></input>
            </div>
            <button onClick={addNewTask}>Add task</button>
            <br/><br/>
            <h2>Todo List</h2>
            <hr/><br/>
            <ul>
                {todos.map((tasks) => (
                    <li key={tasks.id}>
                        <span>{tasks.task}</span> 
                        &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(tasks.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}