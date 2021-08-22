import React, {useState, useEffect} from 'react';
import './MyWatch.css'
import MyWatchList from './MyWatchList'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



export default function MyWarch() {

    const [value, setValue] = useState('');
    const [todosList, setTodos] = useState( [] );

    const handleSubmit = e => {
        e.preventDefault();
        setValue("");

        const newTodosList = [ ...todosList, {id:Math.floor(Math.random() * 100), value, isCompleted: false }];
        setTodos(newTodosList);

        localStorage.setItem("todos", JSON.stringify(newTodosList));
    }

    useEffect( () => {
        const newTodosList = localStorage.getItem("todos") 
        setTodos(newTodosList ? JSON.parse(newTodosList) : []) 
    }, [])


    const removeTodo = id => {
        const newTodos = todosList.filter(el => el.id !== id) ;
        setTodos(newTodos);

        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    const completeTodo = id => {
        const newTodos = todosList.map(el => {
            if(el.id === id) {
                el.isCompleted = !el.isCompleted
            }
            return el
        })
        setTodos(newTodos);

        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    

    return (
        <div className='MyWarchList'>
            <h1>MyWarchList</h1>

            <form className="form-filters">

                <TextField 
                    id="standard-basic" 
                    label="Enter text" 
                    required
                    type="text"
                    value={value}    
                    onChange={e => setValue(e.target.value)}
                />
                
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                >
                    Send
                </Button>
            </form>

            {todosList.length >= 1 
            ? 
            null
            :
            <div className="notice"
            > Add yor notice </div> 
            }

            <MyWatchList 
                className='MyWarchList' 
                todosList={todosList} 
                removeTodo={removeTodo} 
                completeTodo={completeTodo}/>

        </div>
    )
}
