import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  changecheckoutstatus,
  change_name,
  change_phone,
  infomcartclick,
} from "../redux/Global/globalstate";
import { setdetails_collected } from "../redux/Global/globalstate";
import socket from "../socket";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { resetOrderArray } from "../redux/feature/order/Orders";
import { resetquantity } from "../redux/feature/Quantity/quantitySlice";
import { INFO_RESET_DONE, informreset } from "../redux/feature/reset/reset";
import { Cart } from "../cart/cart";
import empty from "./empty-cart.png";
const server_url = "http://localhost:4000/";
export var cartitems = [];
const Checkoutbtn = styled.button`
  color: white;
  border-radius: 10px;
  height: 30px;
  width: 100%;
  border: 1px solid green;
  background-color: green;
  font-weight: bolder;
`;
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
    backgroundColor: "#D32626",
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
function Checkoutcanvas(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const amount = useSelector((state) => state.total.total);
  cartitems = useSelector((state) => state.orders.OrderArray);
  const [selected, setselected] = useState("");
  const [cash, setcash] = useState(false);
  const [upi, setupi] = useState(false);
  const [isempty, setempty] = useState(false);
  function handlecash(e) {
    setcash(true);
    setupi(false);
    setselected("cash");
  }
  function handleupi(e) {
    setcash(false);
    setupi(true);
    setselected("upi");
  }
  useEffect(() => {
    if (cartitems.length === 0) {
      setempty(false);
    } else {
      setempty(false);
    }
  }, [cartitems]);
  console.log("Cartlength:", cartitems.length);
  if (isempty) {
    return (
      <>
        <div
          class="offcanvas offcanvas-bottom h-auto"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Checkout
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body ">
            <div className="text-center">
              <img
                style={{ height: "100px", width: "100px" }}
                src={empty}
                alt="empty_image"
              />
              <h6>Cart is empty :(</h6>
              <spam>Select some food!</spam>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          class="offcanvas offcanvas-bottom h-auto"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              Checkout
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body ">
            <span>Ordered items</span>
            <div
              className="container shadow shadow-sm"
              style={{ borderBottom: "1px solid grey", borderRadius: "12px" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartitems.map((i) => {
                    return (
                      <>
                        <tr key={i.id}>
                          <td>{i.Name}</td>
                          <td>{i.Quantity}</td>
                          <td>{i.Price}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <hr />
            <div
              style={{ borderRadius: "12px" }}
              className="d-flex my-2 p-2 shadow shadow-lg justify-content-between"
            >
              <span className="fs-3">Total:</span>
              <span className="fs-4 fw-bold text-success">₹{amount}</span>
            </div>
            <div className="container my-2 ">
              <div className="d-flex justify-content-between gap-2">
                <div
                  style={{
                    border: "1px solid green",
                    borderRadius: "12px",
                    backgroundColor: cash ? "green" : "white",
                    color: cash ? "white" : "green",
                  }}
                  onClick={handlecash}
                  className="container shadow shadow-sm  p-2 fw-bold text-center"
                >
                  Cash
                </div>
                <div
                  className="container shadow shadow-sm fw-bold text-center p-2"
                  onClick={handleupi}
                  style={{
                    border: "1px solid green",
                    borderRadius: "12px",
                    backgroundColor: upi ? "green" : "white",
                    color: upi ? "white" : "green",
                  }}
                >
                  Upi/Netbanking
                </div>
              </div>
              {cash && (
                <span className="my-2 " style={{ display: "block" }}>
                  ⚠️ For cash you need to pay through the cash counter!
                </span>
              )}
            </div>

            <div className="container text-center">
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={props.checkout}
                className="btn"
              >
                Procced to order
              </button>
            </div>
          </div>
        </div>
        {/* <Offcanvas  show={props.show} onHide={props.onHide} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>d
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      </>
    );
  }
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
  const navigate = useNavigate();
  // const toshow = useSelector(state=>state.Gstate.isdetails_collected)
  // const totalamount = useSelector(state=>state.total.value)
  // const Itemsfortotal = useSelector(state=>state.total.Itemsfortotal)
  // console.log("Itemsfortotal: ",Itemsfortotal);
  // Check_ifuserexist()
  var get = useSelector((state) => state.Gstate.getusername);
  var cartopen = useSelector((state) => state.Gstate.iscartclicked);
  const socketid = useSelector((state) => state.Gstate.socketid);
  console.log("Socket id from redux = ", socketid);
  // useEffect(()=>{
  //   if (localStorage.getItem("UserName")!==null) {
  //     get = false
  //   } else {

  //   }
  // })
  // const[]
  // console.log("Localstorage: ",localStorage.getItem());
  // const[get,setget] = useState(useSelector(state=>state.Gstat.getusername))
  const [show, setshow] = useState(false);
  const [cartshow, setcartshow] = useState(false);
  const [testcanvase, settestcanvase] = useState(false);
  const OrderArray = useSelector((state) => state.orders.OrderArray);
  async function handlecheckout() {
    console.log("checkout working!!");
    console.log("checkout orderarray: ", OrderArray);
    if (OrderArray.length !== 0) {
      console.log("order array from checkout: ", OrderArray);
      var token = sessionStorage.getItem("Customertoken");
      const requestoption = {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(OrderArray),
      };
      console.log("Socketid in localstorage:", localStorage.getItem("linkid"));
      console.log("Sockedid value from moduel:", socket.id);
      const response = await fetch(
        `${server_url}hsscheckout?linkid=${
          localStorage.getItem("linkid") || socket.id
        }`,
        requestoption
      );
      const data = await response.json();
      console.log("DAte from response: ", data);
      navigate(`/order/${data}`);
    }
    dispatch(resetOrderArray());
    dispatch(resetquantity());
    dispatch(informreset());
    dispatch(INFO_RESET_DONE());
    dispatch(changecheckoutstatus());
  }
  // useEffect(()=>{
  //   setget(get)
  // },)
  function handlecartbtnclick() {
    dispatch(infomcartclick());
    // setcartshow(true)
  }
  function showcart() {
    var btn = document.getElementById("cart_canvas");
    btn.click();
  }
  const dispatch = useDispatch();
  // console.log("Total Amount: ",amount);
  // console.log(amount);

  const quantity = useSelector((state) => state.quantity.value);
  const amount = useSelector((state) => state.total.total);
  return (
    <>
      <div style={style.maindiv} className="container-lg fixed-bottom ">
        <div
          style={style.totaldiv}
          className=" d-flex  justify-content-between"
        >
          <span style={style.totalspan}>Total:{amount}</span>

          <button style={style.cartbtn} type="button">
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
        {/* <Cart show={cartopen} onHide={()=>dispatch(infomcartclick())}/> */}

        {/* <Button className="btn btn-success" onClick={()=>settestcanvase(true)}>Test</Button>
         */}

        <button
          id="cart_canvas"
          style={{ display: "none" }}
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          Toggle bottom offcanvas
        </button>
        <Checkoutcanvas
          checkout={handlecheckout}
          show={testcanvase}
          placement={"bottom"}
          onHide={() => settestcanvase(false)}
        />
        <Checkoutbtn onClick={showcart}>Cart</Checkoutbtn>
      </div>
    </>
  );
}

export default OrderFooter;
