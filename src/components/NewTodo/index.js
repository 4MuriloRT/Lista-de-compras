import React, { useState } from 'react'
import PropTypes from 'prop-types';
import "./styles.css";

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('');
    
    const submit = () => {
        if(onNewTodo){
            onNewTodo(value);
            erase();
        } 
    };
    
    const erase = () =>{
        setValue('');
    };
    
    const onChange = (e) => {
        setValue(e.target.value);
    };
    
    const onKeyDown = (e) =>{
        if(e.which === ENTER_KEY ){
          submit();
        }else if(e.which === ESCAPE_KEY){
          erase();
        }
    };
    
    return(
        <input 
            className='new-todo' 
            placeholder='o que precisa ser comprado?' 
            value={value} 
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}; 

NewTodo.protoTypes ={
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;

