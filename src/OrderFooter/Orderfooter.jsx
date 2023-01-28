import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  changecheckoutstatus, change_name,change_phone, infomcartclick } from "../redux/Global/globalstate";
import { setdetails_collected } from "../redux/Global/globalstate";
import socket from "../socket";
import {Modal} from "react-bootstrap";
import styled from 'styled-components'
import { resetOrderArray } from "../redux/feature/order/Orders";
import { resetquantity } from "../redux/feature/Quantity/quantitySlice";
import { INFO_RESET_DONE, informreset } from "../redux/feature/reset/reset";
import { Cart } from "../cart/cart";
export var cartitems = [];
const Checkoutbtn = styled.button`
color:white;
border-radius:10px;
height:30px;
width:100%;
border:1px solid green;
background-color:green;
font-weight:bolder;
`
const style = {
  totalspan: {
    fontSize: "16px",
    backgroundColor: "white",
    height: "25px",
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "0 3px",
    margin: "0.6rem 0",
  },
  cartbtn: {
    height: "30px",
    margin: "0.6rem 0",
    backgroundColor: "transparent",
    border: "0.1px solid green",
    borderRadius: "10px",
  },
  icon: {
    color: "green",
  },
  maindiv: {
    height: "111px",
    padding: "0 5px 0 5px",
    backgroundColor: "#FF616D",
  },
  menubtn: {
    backgroundColor: "white",
    height: "25px",
    padding: "0 3px",
    margin: "0.6rem 0 0 8rem",
  },
  cart: {
    // height:'200px',
    // display:'none'
  },
  // totaldiv:{
  //     margin:'5rem 0 0 0'
  // },
  // checkoutbtn:{
  //     margin:'0.8rem 0 0 0'
  // }
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Menu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4></h4> */}
        <ul>
          <li>Idly</li>
          <li>Idly</li>
          <li>Idly</li>
          <li>Idly</li>
          <li>Idly</li>

        </ul>
        {/* <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
// function Getuserdata(props) {
//   const dispatch = useDispatch()
//   const[nameerror,setnameerror] = useState(false)
//   const[phoneerror,setphoneerrror] = useState(false)
// 
//    function handlesumbit(){
//     // localStorage.setItem('Customerid',customerid)
//     // console.log("customerid: ",customerid);
//     console.log("Name: ",name);
//     console.log("Phone: ",phone);
//     if(name===null&&phone===null){
//       setnameerror(true)
//       setphoneerrror(true)
//     }
//     else{    
//     save_user_details(name,phone)
//     dispatch(change_name())
//     dispatch(change_phone())
//     props.onHide()
//     load_user_details()
//     }
//   }

// function Check_ifuserexist(){
//   const dispatch = useDispatch()
//   if(check_user_details()===true){
//     dispatch(informpageloaded())
//   }
// }
function OrderFooter() {
  const navigate = useNavigate()
  // const toshow = useSelector(state=>state.Gstate.isdetails_collected)
  // const totalamount = useSelector(state=>state.total.value)
  // const Itemsfortotal = useSelector(state=>state.total.Itemsfortotal)
  // console.log("Itemsfortotal: ",Itemsfortotal);
  // Check_ifuserexist()
  var get =  useSelector(state=>state.Gstate.getusername)
  var cartopen = useSelector(state=>state.Gstate.iscartclicked)
  const socketid =  useSelector((state)=>state.Gstate.socketid)
  console.log("Socket id from redux = ",socketid);
  // useEffect(()=>{
  //   if (localStorage.getItem("UserName")!==null) {
  //     get = false
  //   } else {
      
  //   }
  // })
  // const[]
  // console.log("Localstorage: ",localStorage.getItem());
  // const[get,setget] = useState(useSelector(state=>state.Gstat.getusername))
  const[show,setshow] = useState(false)
  const[cartshow,setcartshow] = useState(false)
 const OrderArray = useSelector(state=>state.orders.OrderArray)
 async function handlecheckout(){
    console.log("checkout working!!");
    console.log("checkout orderarray: ",OrderArray);
    if(OrderArray.length!==0){
      console.log("order array from checkout: ",OrderArray);
      var token = sessionStorage.getItem('Customertoken')
      const requestoption = {
        method:'POST',
        headers: {
          'content-Type':'application/json',
          'Authorization': 'Bearer '+token,
        },
        body: JSON.stringify(OrderArray)
    };
    console.log("Socketid in localstorage:",localStorage.getItem('linkid'));
    console.log('Sockedid value from moduel:',socket.id);
    const response = await fetch(`http://localhost:4000/hsscheckout?linkid=${localStorage.getItem('linkid')||socket.id}`,requestoption);
    const data =await response.json()
    console.log("DAte from response: ",data);
    navigate(`/order/${data}`)
    }
    dispatch(resetOrderArray())
    dispatch(resetquantity())
    dispatch(informreset())
    dispatch(INFO_RESET_DONE())
    dispatch(changecheckoutstatus())
  }
  // useEffect(()=>{
  //   setget(get)
  // },)
  function handlecartbtnclick(){
    dispatch(infomcartclick())
    // setcartshow(true)
  }
  const amount = useSelector((state) => state.total.total);
  const dispatch = useDispatch();
  // console.log("Total Amount: ",amount);
  // console.log(amount);
 
  const quantity = useSelector((state) => state.quantity.value);
  return (
    <>
      <div style={style.maindiv} className="container-lg fixed-bottom ">
        <div
          style={style.totaldiv}
          className=" d-flex  justify-content-between"
        >
          <span style={style.totalspan}>Total:{amount}</span>
          <button style={style.menubtn} onClick={() => setshow(true)} type="button" className="btn  btn-sm">
            Menu
          </button>
          <button
            style={style.cartbtn}
            onClick={handlecartbtnclick}
            type="button"
          >
            <i style={style.icon} className="fa-solid fa-cart-shopping"></i>{" "}
            {quantity >= 1 && (
              <span
                style={{
                  fontSize: "10px",
                  position: "relative",
                  top: "-0.3rem",
                }}
                className="badge  text-bg-secondary"
              >
                {quantity}
              </span>
            )}
          </button>
        </div>
        {/* <button variant="primary" onClick={() => setshow(true)}>
        Launch vertically centered modal
      </button> */}
      {/* <Cart show={cartshow} onHide={()=>setcartshow(false)} /> */}
      {/* <Mycart show={cartshow} onHide={()=>setcartshow(false)}/>
       */}
       <Cart show={cartopen} onHide={()=>dispatch(infomcartclick())}/>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setshow(false)}
      />
        <Checkoutbtn onClick={handlecheckout} >
          Order Now
        </Checkoutbtn>
      </div>
    </>
  );
}

export default OrderFooter;
