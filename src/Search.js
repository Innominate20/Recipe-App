import React from "react";
import { useState, useEffect} from "react";
import Block from "./Infoblock";
import axios from "axios";

const Search = () => {

    const [name, setname] = useState("");

    const [gendata, setgendata] = useState([])

    const [findata, setfdata] = useState([]);

    const [catchclick, setcatch] = useState(null);
    
  const handleclick = (id) => {

    setcatch(id === catchclick ? null : id);
  };
    
    const handlechange = (event)=>{
        var ch = event.target.value;
        setname(ch)
    }

    const FindRecipe = async (event)=>{
        event.preventDefault();
        try{
            const data = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${process.env.REACT_APP_API_KEY}`)
            setgendata(data.data.results); 
            console.log(data.data.results);
             
        }
        catch(err){
            console.log(err);
        }
        
    }
    
    const getfinaldata = async (arr) => {
        try {
            const updatedData = await Promise.all(arr.map(async (item) => {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                return response.data;
            }));
            setfdata(prevData => [...prevData, ...updatedData]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        if(gendata.length> 0)
            getfinaldata(gendata);

    },[gendata])  

    return(
        <div className="searchpage">
        <form onSubmit={FindRecipe}>
            <label htmlFor="searchbar">Type  a name: </label>
            <input placeholder="Search by name" id="searchbar" onChange={handlechange} type="text" value={name} aria-autocomplete="none"/>
            <button type="submit" >Find</button>
           
        </form>
        { findata.length > 0 &&  <div className="contfblock">
        {
            findata.map((item)=>{
                 return(
                    <Block key={item.id} ID={item.id} Instruction={item.instructions} 
                    click={handleclick} condition={catchclick === item.id} unclick={()=>{setcatch(null)}}
                    name={item.title} type={item.dishTypes[0]} image={item.image} Ing={item.extendedIngredients}/>
                 )
            })

        }
        </div>  
        }
        </div>
    )
}


export default Search;