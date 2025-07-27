import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos] = useState([{task: "sample", id: uuidv4(), isDone: false}]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask=()=>{
        setTodos((prevValue) =>{
            return[...prevValue,{id: uuidv4(), task:newTodo, isDone: false}];
        })
        setNewTodo("");
    };
    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) =>{
        setTodos((preTask)=> todos.filter((preTask) => preTask.id != id)) 
    };
    let markAsDone = (id) =>{
        setTodos((prevTodo)=>
            prevTodo.map((todos) =>{
                if(todos.id == id){
                    return{
                        ...todos,
                        isDone: true,
                    };
                }else{
                    return todos;
                }
            })
        );
    };
    let markAllDone = ()=>{
        setTodos((prevTodo)=>
            prevTodo.map((todo)=>{
                return{
                    ...todo,
                    isDone: true,
                }
            })
        );
    };
    return (
        <div>
            <div>
                <input placeholder="Enter tasks" value={newTodo} onChange={updateTodoValue}></input>
            </div>
            <button onClick={addNewTask}>Add task</button>
            <br/><br/>
            <h2>Todo List</h2>
            <hr/><br/>
            <ol>
                {todos.map((tasks) => (
                    <li key={tasks.id}>
                        <span style={tasks.isDone ? {textDecorationLine: "line-through"}:{}}>{tasks.task}&nbsp;&nbsp;<button onClick={()=> markAsDone(tasks.id)}>Done</button></span> 
                        &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(tasks.id)}>Delete</button>
                    </li>
                ))}
            </ol>
            <button onClick={markAllDone}>All done</button>
        </div>
    );
}