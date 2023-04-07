import { useState } from "react";
import { useEffect } from "react";
import { getGift } from '../helpers/getGifs';
export const useFetchGif = (category) => {
const [state, setState] = useState({data:[],loading: true});
useEffect(()=>{
     getGift(category).then(imgs=>{
        
            setState({data:imgs,loading:false})
        
       
     });
    },[category]);


  return state;
    
  
}
