import React from "react";
import './App.css';
//mport { BrowserRouter as Router } from 'react-router-dom'; 
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes , Route  } from "react-router-dom";
import MyNavBar from "./Navbar";
 import Home from "./Home";
 import Cart from "./Cart";
 import Login from "./Login";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      
      <MyNavBar/>
      <Routes>
        <Route path ="/ " element= {<Home />}></Route>
        <Route path ="/Home  " element= {<Home />}></Route>
        <Route path ="/Product Details " element= {<div></div>}></Route>
        <Route path ="/Login " element= {<Login />}></Route>
        <Route path ="/Cart" element= {<Cart />}></Route>
        <Route path ="/Checkout" element= {<div></div>}></Route>
      </Routes> 
     
    </div>
  );
}

export default App;
