import React, {  useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider, useDispatch } from "react-redux";
import OrderHeader from "./OrderHeader";
import OrderType from "./OrderType";
import MenuDisplay from "./MenuDisplay/MenuDisplay";
import store from "./redux/store";
import OrderFooter from "./OrderFooter/Orderfooter";
import { Cart } from "./cart/cart";
import socket from "./socket";
import { informpageloaded } from "./redux/Global/globalstate";

// import axios from "axios";

// import  { useMediaQuery } from 'media-query-react';

function App() {
  const dispatch = useDispatch()
  function check_user_exist(){
    if(localStorage.getItem('UserName')!==null){
      dispatch(informpageloaded())
    }
  }
  const[connected,setconnected] = useState(false)
  // const [modalShow, setModalShow] = useState(false);
  // const[userverified,setuserverified] = useState(false)
  useEffect(()=>{
    check_user_exist()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!connected) {
    socket.on("connect",()=>{  
      console.log("Connect with id: ",socket.id);
      setconnected(true)
    // io.on("verifyitem",'hello')

    })
  } else {
    console.log("Already connected!");
  }
  // const isDesktop = useMediaQuery({query:'min-width:1024px'})
  // axios.get('http://localhost:4000/')
  // .then((response)=>{
  //   console.log("Msg from server: ",response.data);
  // })
  const isDesktop = false;
  console.log("isDesktopOrLaptop: ",isDesktop);
  return (
    <>
    {isDesktop?
    <>
    <h4>Sorry!! This page can be viewed only by mobile devices</h4>
    </>:
    // userverified?
    <Provider store={store}>
    <OrderHeader />
    <OrderType />
    <MenuDisplay />
    <OrderFooter />
    <Cart/>
  </Provider>
    }
      
    </>
  );
}

export default App;
