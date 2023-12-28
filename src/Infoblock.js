import React from "react";


const Block = (props) =>{
    
    return(

        <div className="maincont">
            <img src={props.image} alt="Dish"/>
            <div className="forNm">
                <span>{props.name}</span>
            </div>
            <div className="Type">
                <span>Type:  {props.type}</span>
            </div>
            <div className="Instr">
                <span onClick={()=>{props.click(props.ID
                )}}>see</span>
            </div>
            <div className={props.condition? "unhide" : "hide"}>
           <p>{props.Instruction}</p>
           <div className="Ingr">
                <div>
                   {props.Ing.map((item)=>{
                        return(
                        <li>{item.name}</li>
                     ) 
                    })}
                </div>
            
           </div>
           <span onClick={props.unclick}>Hide</span>
        </div>
        
        </div>
           
    )
}

export default Block
