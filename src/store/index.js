 import { configureStore, combineReducers } from "@reduxjs/toolkit";
 import Cart from "../slice/cart";
//  import user from "../slice/userSlice";
 import userSlice from "../slice/userSlice";

 export const store = configureStore ({
  renducer:{
    Cart,
    userSlice,
  }

 })


