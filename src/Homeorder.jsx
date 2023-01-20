import MenuDisplay from "./MenuDisplay/MenuDisplay";
import OrderFooter from "./OrderFooter/Orderfooter";
import OrderHeader from "./OrderHeader";
import { save_sockid } from "./worker";
import {redirect,useNavigate} from 'react-router-dom'
import socket from "./socket";
import { Cart } from "./cart/cart";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store.js";

function Homeorder({authorized}){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[connected,setconnected] = useState(false)
  if (!connected) {
    socket.on("connect",()=>{  
      console.log("Connect with id: ",socket.id);
      save_sockid(socket.id)
      setconnected(true)
    })
  } else {
    console.log("Already connected!");
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