
import React, { useState } from "react";
import PropTypes  from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')
const handleInputChange=(e)=>{

setinputValue(e.target.value)
}

const handleSumint=(e)=>{
    e.preventDefault();
    if(inputValue.trim().length>2){
        setCategories(cats=>[inputValue]);
        setinputValue('');
    }


}
  return (
    
    <form onSubmit={handleSumint}>
    

        <h1>{inputValue}</h1>
        <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        >
            
        </input>
        </form>
    
  )
}
AddCategory.prototype={
    setCategories:PropTypes.func.isRequired
}
