import React from 'react'

export const Item = (props) => {
   
  return (
  <div className='card animate__animated animate__bounceInRight'>
    <img src={props.url} 
    alt={props.title}/>

<p>{props.title}</p>
  </div>
  
    
        
    
    
    
  )
}
