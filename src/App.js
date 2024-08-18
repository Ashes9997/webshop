import React from "react";
import './App.css';
//mport { BrowserRouter as Router } from 'react-router-dom'; 
import { Routes , Route  } from "react-router-dom";
import Navbar from "./Navbar";

const App = ()  =>{
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ="/Product Details " element= {<div></div>}></Route>
        <Route path ="/Login " element= {<div></div>}></Route>
        <Route path ="/Cart" element= {<div></div>}></Route>
        <Route path ="/Checkout" element= {<div></div>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
