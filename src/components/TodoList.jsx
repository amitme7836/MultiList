import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
function TodoList({ todos }) {
   
    return (
        <div>
            <h3>{TodoList.name}</h3>
            <TodoInput />
            <p></p>
            <p></p>
            {todos.map(todo=>{
                    return <TodoItem key={todo.id} todo={todo}/>
            })
            
            }
        </div>
    )
}

export default TodoList;
