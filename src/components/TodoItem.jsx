import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/actions';

function TodoItem({ todo }) {
    let dispatch = useDispatch();
       
    return (
        <div>
            <h4>{todo.name}</h4>
            <div className="row">
                <div>#{todo.id}</div>
                <div>{todo.name}</div>
                <button onClick={()=> dispatch( deleteTodo(todo.id) )}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;
