import MenuDisplay from "./MenuDisplay/MenuDisplay";
import OrderFooter from "./OrderFooter/Orderfooter";
import OrderHeader from "./OrderHeader";
import {redirect,useNavigate} from 'react-router-dom'
import socket from "./socket";
import { Cart } from "./cart/cart";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store.js";
import { savesocketid } from "./redux/Global/globalstate";

function Homeorder({authorized}){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var connected = false
    // sessionStorage.removeItem("socketid")
    
      if (!connected ) {
        socket.on("connect",()=>{  
          console.log("Connect with id: ",socket.id);
          // dispatch(savesocketid(socket.id))
          localStorage.setItem('linkid',socket.id)
          console.log("Current socket id in localstorage:",localStorage.getItem('linkid'));
          // eslint-disable-next-line react-hooks/exhaustive-deps
          connected = true;
        })
      } else {
        console.log("Already connected! or not logged in...");
      }

  
    return <>
    <Provider store={store}>
    <OrderHeader/>
    <MenuDisplay/>
    <OrderFooter/>
    <Cart/>
    </Provider>
    </>

    }

//   if(sessionStorage.getItem('UserName')!==null || sessionStorage.getItem('UserName')!==undefined){
//     isauthorized = true;
  
 


export default Homeorder;