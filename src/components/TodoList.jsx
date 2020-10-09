import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux'; 
import TodoInput from './TodoInput';
function TodoList() {
    let todos = useSelector(state => state)
    return (
        <div>
            <h3>{TodoList.name}</h3>
            
            <TodoInput />

            {todos.map(todo=>{
                    return <TodoItem key={todo.id} todo={todo}/>
            })}
        </div>
    )
}

export default TodoList;
