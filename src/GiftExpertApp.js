import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp=()=>{
    //const categories=['One Punch','Samuray X','Dragon Ball'];
   
    const [categories, setCategories] = useState(['One Punch'])
   
    

    return(

       
       <>
        <h2>GiftApp</h2>
    <AddCategory setCategories={setCategories}></AddCategory>
        <hr/>
        
        <ol>{
            categories.map(category =>

                <GiftGrid  key={category}
                category={category}>

                </GiftGrid>

                
            

            
            )
        }
            
            
        </ol>
        </>
        
    
    )
}
export default GiftExpertApp;