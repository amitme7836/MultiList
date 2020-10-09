import React from 'react'
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

function TodoListApp() {
let todos = useSelector(state => state)
    return (
        <div>
            <h1>My Tasks to be done</h1>
           {/*todos.map(todo=>{
                return <TodoList key={todo.id} name={todos.name} todos={todos.tasks}/>
            })*/}
            <TodoList todos={todos}/>
        </div>
    )
}

export default TodoListApp
