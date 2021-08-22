import React from 'react';
import './MyWatchList.css';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function MyWarchList({todosList, removeTodo, completeTodo}) {

    return (
        <div className='MyWarchList-wrapper'>
            {todosList && todosList.map( (el, i) => {
                return(
                    <div key={i} 
                        className="MyWarchList-item" style={{ 
                        textDecoration: el.isCompleted ? "line-through" : "none",
                        color: el.isCompleted ? "green" : "" }}>
                        
                        <FormControlLabel
                            onChange={() => completeTodo(el.id)} checked={el.isCompleted}
                            control={<Checkbox color="primary" />}
                        />

                        <div className="MyWarchList-item-text">
                            {el.value} 
                        </div>  

                        <Button
                            onClick={() => removeTodo(el.id)} 
                            title="Remove task from list"
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>

                    </div>
                )
            })}
        </div>
    )
}
