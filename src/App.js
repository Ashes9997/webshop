import React from "react";
import './App.css';
//mport { BrowserRouter as Router } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes , Route  } from "react-router-dom";
import Navbar from "./Navbar";
 import Home from "./Home";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      
      <Navbar/>
      <Routes>
        <Route path ="/Home  " element= {<Home />}></Route>
        <Route path ="/Product Details " element= {<div></div>}></Route>
        <Route path ="/Login " element= {<div></div>}></Route>
        <Route path ="/Cart" element= {<div></div>}></Route>
        <Route path ="/Checkout" element= {<div></div>}></Route>
      </Routes> 
     
    </div>
  );
}

export default App;
