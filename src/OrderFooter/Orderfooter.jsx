import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infomcartclick } from "../redux/Global/globalstate";
import { setdetails_collected } from "../redux/Global/globalstate";
import socket from "../socket";
import {Modal} from "react-bootstrap";
import styled from 'styled-components'
import {load_user_details, save_user_details } from "../worker";
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
function Getuserdata(props) {
  const[nameerror,setnameerror] = useState(false)
  const[phoneerror,setphoneerrror] = useState(false)
  const[name,setname] = useState(null);
  const[phone,setphone] = useState(null);
   function handlesumbit(){
    console.log("Name: ",name);
    console.log("Phone: ",phone);
    if(name===null&&phone===null){
      setnameerror(true)
      setphoneerrror(true)
    }
    else{
    save_user_details(name,phone)
    props.onHide()
    load_user_details()
    }
  }
  function handlenamechange(e){
    setname(e.target.value)
    setnameerror(false)
  }
  function handlephonechange(e){
    setphone(e.target.value)
    setphoneerrror(false)
  }
  // function handleinputchange(e){
  //   if (e.target.type==='text') {

  //     setname(e.target.value)
  //   } else {
  //     setphone(e.target.value)
  //   }
  // }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // className="bg-success"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" >
          
        <iframe title="userdetails" src="https://embed.lottiefiles.com/animation/72874"></iframe>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3"  >
            <div>
            <label for="userdatacollection" className="form-label">Name</label>
            <input type="text" onChange={handlenamechange} className="form-control"/>
            {nameerror&&<span>please enter your name!</span>}
            </div>
            <div>
            <label for="userdatacollection" className="form-label">Phone Number</label>
            <input type="Number" onChange={handlephonechange} className="form-control"/>
            {phoneerror&&<span>please enter your phonenumber properly!</span>}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handlesumbit}>Submit</button>
      </Modal.Footer>
    </Modal>
  );
}
// function Check_ifuserexist(){
//   const dispatch = useDispatch()
//   if(check_user_details()===true){
//     dispatch(informpageloaded())
//   }
// }
function OrderFooter() {
  // const toshow = useSelector(state=>state.Gstate.isdetails_collected)
  // const totalamount = useSelector(state=>state.total.value)
  // const Itemsfortotal = useSelector(state=>state.total.Itemsfortotal)
  // console.log("Itemsfortotal: ",Itemsfortotal);
  // Check_ifuserexist()
  var get =  useSelector(state=>state.Gstate.getusername)
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
 const OrderArray = useSelector(state=>state.orders.OrderArray)
  function handlecheckout(){
    console.log("checkout working!!");
    console.log("checkout orderarray: ",OrderArray);
    if(OrderArray.length!==0){
      console.log("order array from checkout: ",OrderArray);
    socket.emit("handlecheckout",OrderArray )
    }
    // socket.on("menulist",(arg)=>{
    //   console.log("menu:",arg);
    // })
  }
  // useEffect(()=>{
  //   setget(get)
  // },)
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
            onClick={() => dispatch(infomcartclick())}
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
     
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setshow(false)}
      />
       <Getuserdata
        show={get}
        onHide={()=>dispatch(setdetails_collected())}
        backdrop="static"
      />
        <Checkoutbtn onClick={handlecheckout} >
          Order Now
        </Checkoutbtn>
      </div>
    </>
  );
}

export default OrderFooter;
