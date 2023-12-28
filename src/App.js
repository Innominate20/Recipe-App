import React  from "react";
import Home from "./Home"; 
import Nav from "./Navbar";
import Search from "./Search";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
 

 
function App() {   
  

  return (
    <Router>
      <div className="App">  
        <Nav/>
        <Routes>
          <Route path="/" Component={Home}>
        
          </Route>
          <Route path="/Search" Component={Search}>

          </Route> 
        </Routes>
      </div> 
    </Router>
  );
}


export default App;
