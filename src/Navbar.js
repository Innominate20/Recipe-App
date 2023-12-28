import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{

    return(
        <nav className="Navbar"> 
            <Link to="/" className="nv">Home</Link>
            <Link to="/Search" className="nv">Search</Link>
         
        </nav>
    )
}

export default Nav;