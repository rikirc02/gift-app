import React from 'react'


import { useFetchGif } from '../hooks/useFetchGif';
import { Item } from './Item';


export const GiftGrid = ({category}) => {
  




  const {data,loading}=useFetchGif(category);



  
  
 
  return (<>
   
   <h3 className='animate__animated animate__bounceInRight'>{category}</h3>
   <p1 className='animate__animated animate__flash'>{loading?'Cargando...':'data cargada'}</p1>
    <div className='cardGift'>
    
    
        
          
          {data.map(img=>(
            <Item key={img.id}
          {...img}/>
             )
           

          )}
       

          </div>
    </>
  )
  
}
