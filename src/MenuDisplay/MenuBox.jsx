import React, {  useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import img from "./image.png";
import "./MenuBox.css";
import AddQuantity from "./Addquantity";
import { useDispatch, useSelector } from "react-redux";
import { addorders } from "../redux/feature/order/Orders";
// import { socketContext } from "../App";
import socket from "../socket";


import {
  decrement,
  increment,
} from "../redux/feature/Quantity/quantitySlice";
import { addamount } from "../redux/feature/total/totalSlice";
import { infomcartclick } from "../redux/Global/globalstate";
// import { RemoveOrderfromarray } from "../../cart/cart";
// import { removeOrderfromarray } from "../../cart/cart";
// import { updatearray } from "../../cart/cart";
// import { addamount } from "../../redux/feature/total/totalSlice";
// import { addamount, reduceamount } from "../../redux/feature/total/totalSlice";
// import { useDispatch,useSelector } from "react-redux";
// import {  addorders} from "../../redux/feature/order/Orders";
const style = {
  image: {
    width: "60px",
    heigth: "60px",
  },
  addbtn: {
    heigth: "60px",
  },
  note: {
    fontSize: "12px",
  },
};
var total = 0;
export const MenuBox = (props) => {
  const[verified,setverified] = useState(false)
  // const socket = useContext(socketContext)
  // console.log("socket: ",socket);
  const Name = props.name;
  if(!verified){
  socket.emit("verifyitem",`Recievd Item:${Name}`)
  setverified(true)
  }
  const should_blur = useSelector((state) => state.Gstate.iscartclicked);

  //     function Toast(){
  //         // <!-- Flexbox container for aligning the toasts -->
  // <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  //   {/* <!-- Then put toasts within --> */}
  //   <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  //     <div class="toast-header">
  //       <img src="..." class="rounded me-2" alt="..."/>
  //       <strong class="me-auto">Bootstrap</strong>
  //       <small>11 mins ago</small>
  //       <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  //     </div>
  //     <div class="toast-body">
  //       Hello, world! This is a toast message.
  //     </div>
  //   </div>
  // </div>
  //     }
  const price = 5;
  const dispatch = useDispatch();
  const itemName = props.name;
  // const dispatch = useDispatch()
  const cartquantity = useSelector((state) => state.quantity.value);
  const cartopend = useSelector((state)=>state.Gstate.iscartclicked)

  // const[total,settotal] = useState(0)
  // const finalyarray = useSelector(state=>state.orders.FinalyOrderArray)
  // const[index,setindex]=useState(0)
  const orderarr = useSelector((state) => state.orders.OrderArray);
  const [added, setadd] = useState(false);
  const [quantity, setquantity] = useState(0);
  const [selected, setselected] = useState(false);

  const cart_reset = useSelector((state) => state.cart_reset.value);
  // useEffect(()=>{
  // if(!verified){
  //   socket.emit("verifyitem",'testing verifyitem')
  //   console.log("Emit sent");
  // }
  // setverified(true)
  // },[])
  // socket.on("verifyitem",'hello')
  // const[reseted,setreseted]=useState(cart_reset)
  // const orderarr=[Name,quantity]
  // const[order,setorder] = useState({Name,quantity,price})
  // console.log("Value of cart_reset: ",cart_reset);
  const cartitems = useSelector((state) => state.orders.OrderArray);

  // console.log("checking exported cartitems: ",cartitems);

  function handleinc() {
    setselected(true);

    setquantity(quantity + 1);

    //    dispatch(updatequantity({itemName,quantity}))

    console.log("Testing: ", orderarr[1]);
    // settotal(total * price)
    // console.log('Quantity: ',quantity);
    // console.log("Price: ",price);
    // console.log("Total Price of "+{Name}+" is: ",total);
    // dispatch(addamount(total))
  }

  function handledec() {
    if (quantity !== 0) {
      setquantity(quantity - 1);
    }
    // if(quantity!==0&&quantity!==1){setquantity(quantity-1)}
  }
  function handledelete() {
    setselected(false);
    setadd(false);
    setadd(false);
    setquantity(0);
    // RemoveOrderfromarray(itemName)
    if (cartquantity > 0) {
      dispatch(decrement());
    }
    dispatch(infomcartclick());

    // dispatch(removeOrder(props.name))
  }
  useEffect(() => {
    setquantity(quantity);
    // setorder({Name,quantity})
    // setreseted(cart_reset)
    // console.log("CART_RESET = ",cart_reset);
  }, [quantity, itemName, price,]);
  useEffect(() => {
    setquantity(0);
    setselected(false)
    setadd(false);  
   
    // console.log("value of cartreset: ",cart_reset);
    // setreseted(cart_reset)
  }, [cart_reset,cartopend]);
  //------------------------------------ Handle Add Function ---------------------------------------------------------//
  function handleadd() {
    // if(quantity!==0){
    // console.log("It working bruhh!!....");
    // socket.emit("verifyitem",'testing verify items')
    // }
    console.log(socket);
    dispatch(increment());
    setadd(true);
    // console.log('order: ',order);
    total = quantity * price;
    // dispatch(reduceamount(prevtotal));
    dispatch(addamount(total));
    dispatch(
      addorders({ ITEM: { Name: itemName, Quantity: quantity, Price: price } })
    );
    console.log("CartItems in MenuBox: ", cartitems);
    console.log("OrderArray: ", orderarr);
    // removeOrderfromarray(props.name)

    // <Toast/>
    // console.log("Total: ",total);
    // ORDER_ARRAY.push(order)
    // console.log("Order: ",order);

    // console.log("Result OrderArray: ",result);
    // console.log(ORDER_ARRAY);
    // socket.emit("verifyitem",'testing verifyitem')

  }

  // const result = useSelector(state=>state.orders.OrderArray)
  return (
    <>
      <div className="container-sm ">
        <div className="row">
          <div className="container-sm col">
            <img style={style.image} src={props.img} alt="image_png" />
            <h6 className="w-50 my-2">{props.name}</h6>
            <span
              style={{ fontSize: "12px", position: "relative", top: "-8px" }}
            >
              ⭐
            </span>
          </div>
          <div className="container-sm col text-end">
            <span>₹7.99</span>
            <span style={style.note} className="text-muted">
              {" "}
              */piece
            </span>
            {/* <h6 className="text-muted">*min 3pcs required</h6> */}
            <AddQuantity
              hide={added}
              add={handleinc}
              sub={handledec}
              remove={handledelete}
              quantity={quantity}
            />
            {added?(
              <button
                disabled={(!selected || should_blur) && true}
                id="addbtn"
                className="btn btn-sm my-3 "
              >
                ✅Added
              </button>
            ) : (
              <button
                disabled={(!selected || should_blur) && true}
                id="addbtn"
                onClick={handleadd}
                className="btn btn-sm my-3 "
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};
