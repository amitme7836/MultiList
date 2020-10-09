import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/actions';

function TodoItem({ todo }) {
    let dispatch = useDispatch();
       
    return (
        <div>
            <div>
                <div>#{todo.id}</div>
                <div>{todo.name}</div>
                <button onClick={()=> dispatch( deleteTodo(todo.id) )}>Delete</button>
                <p></p><p></p>
            </div>
        </div>
    )
}

export default TodoItem;
