import React, { useState } from "react";
import { useEffect } from "react";   
import Block from "./Infoblock";
import axios from "axios";


function Home() {   
  

  const [data, setdata] = useState([]);

  const [catchclick, setcatch] = useState(null);
    
  const handleclick = (id) => {

    setcatch(id === catchclick ? null : id);
  };

  useEffect(()=>{ 
    
    const newdata = async () =>{
    try{
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?number=11&apiKey=${process.env.REACT_APP_API_KEY}`)
    setdata(res.data.recipes);
    

    }
    catch(err){
      console.log(err);
    }
  }

  newdata();
  },[])
  

  return (
    <span>
    <div className="text">Some Random Recipes</div>

    <div className="contfblock">
       {
        data.map((item)=>{
        
      return( 

        <Block key={item.id} ID={item.id} Instruction={item.instructions} 
        click={handleclick} condition={catchclick === item.id} unclick={()=>{setcatch(null)}}
        name={item.title} type={item.dishTypes[0]} image={item.image} Ing={item.extendedIngredients}/>
        
      ) 
        })
      
       }
       
    </div> 
    </span>
    
  );
}


export default Home;