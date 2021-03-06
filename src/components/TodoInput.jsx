import React,{useState} from 'react';
import {addTodo} from '../redux/actions';
//import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
function TodoInput() {
    let [name,setName]=useState('');
    let dispatch = useDispatch();
    return (
        <div>
            <h3>Add task to do in this list</h3>
            <div>
                <input type="text" 
                       value={name}
                       onChange={(e)=>setName(e.target.value)} />
                <button onClick={()=> {
                   dispatch( addTodo(
                    {
                        id:4,
                        name:name
                    }
                ));
                    setName('');
                } }>Add</button>
            </div>
        </div>
    )
}

export default TodoInput;
