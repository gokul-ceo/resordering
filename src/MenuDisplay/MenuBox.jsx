import React, {  useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import img from "./image.png";
import loading from './loading.jfif'
import "./MenuBox.css";
import AddQuantity from "./Addquantity";
import { useDispatch, useSelector, } from "react-redux";
import { addorders } from "../redux/feature/order/Orders";
// import { socketContext } from "../App";
import socket from "../socket";
import star from './star.png'


import {
  decrement,
  increment,
} from "../redux/feature/Quantity/quantitySlice";
import { addamount } from "../redux/feature/total/totalSlice";
import { infomcartclick } from "../redux/Global/globalstate";
import { UPDATE_MENU_STATUS } from "../redux/Menustate/Menu_states_Slice";
// import { RemoveOrderfromarray } from "../../cart/cart";
// import { removeOrderfromarray } from "../../cart/cart";
// import { updatearray } from "../../cart/cart";
// import { addamount } from "../../redux/feature/total/totalSlice";
// import { addamount, reduceamount } from "../../redux/feature/total/totalSlice";
// import { useDispatch,useSelector } from "react-redux";
// import {  addorders} from "../../redux/feature/order/Orders";
const style = {
  image: {
    width: "80px",
    heigth: "80px",
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
  var status = props.status
  const [hide,sethide] = useState(false)

  const[verified,setverified] = useState(false)
  const[isavailable,setavailable] = useState(false)
  var price = props.price
  useEffect(()=>{
    if(!status){
     sethide(true)
    }else if (status){
      setavailable(true)
    }
  },[status])
  // const menustatuslist = useSelector((state)=>state.menustatus.Menustates)
  // const socket = useContext(socketContext)
  // console.log("socket: ",socket);  
  // useEffect(()=>{
  //   console.log(`${props.name} avaliablity from menubox is ${isavailable}`);
  // },[isavailable])
  // var Name,availability;
  // const [testarray,settestarray] = useState({[Name]:availability})

  // console.log("Testarray result: ",testarray);
  
  // const should_blur = useSelector((state) => state.Gstate.iscartclicked);

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
  const dispatch = useDispatch();
  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const itemName = cap(props.name);

  
  // const dispatch = useDispatch()
  const cartquantity = useSelector((state) => state.quantity.value);
  // const cartopend = useSelector((state)=>state.Gstate.iscartclicked)

  // const[total,settotal] = useState(0)
  // const finalyarray = useSelector(state=>state.orders.FinalyOrderArray)
  // const[index,setindex]=useState(0)
  const orderarr = useSelector((state) => state.orders.OrderArray);
  const [added, setadd] = useState(false);
  const [quantity, setquantity] = useState(0);
  const [selected, setselected] = useState(false);

  const cart_reset = useSelector((state) => state.cart_reset.value);
  const checkedout = useSelector((state)=>state.Gstate.checkoutstatus);
  useEffect(()=>{
    if(quantity===0){
      // console.log("Value of selected: ",selected);
      setselected(false)
      // console.log("This part is working....");
      // console.log("Value of selected: ",selected);
    }
  },[quantity])
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
    // dispatch(infomcartclick());

    // dispatch(removeOrder(props.name))
  }
  useEffect(() => {
    setquantity(quantity);
    // setorder({Name,quantity})
    // setreseted(cart_reset)
    // console.log("CART_RESET = ",cart_reset);
  }, [quantity, itemName]);
  useEffect(() => {
    setquantity(0);
    setselected(false)
    setadd(false);  
   
    // console.log("value of cartreset: ",cart_reset);
    // setreseted(cart_reset)
  }, [cart_reset]);
  useEffect(()=>{
    setquantity(0)
    // setselected(false)
    // setadd(false)
  },[checkedout])
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
      addorders({ Name: itemName, Quantity: quantity, Price: price } )
    );
    console.log("CartItems in MenuBox: ", cartitems);
    console.log("OrderArray: ", orderarr);

  }

  // const result = useSelector(state=>state.orders.OrderArray)
  return (
    <>
      <div style={{'borderTop':'3px solid rgb(255, 97, 109)','borderRadius':'7px'}} className={hide?'container-sm d-none shadow shadow-lg mb-4':'container-sm shadow shadow-lg mb-4'}>
        <div className="row">
          <div className="container-sm my-2 col">
            <img style={style.image} src={props.img} alt="image_png" />
            <h6 className="w-50 my-2">{itemName}</h6>
            <div style={{width:'40px','position':'relative','bottom':'7rem','left':'5rem','borderRadius':'2px'}} className="container ms-1 d-flex  bg-success">
              <img alt="star.png" src={star}  style={{'width':'12px','height':'12px','margin':"3px 0 0 -8px"}}/>
              <span style={{'margin':'0 1px 0 0','fontSize':'12px','fontWeight':'bold','color':'white'}}>4.5</span>
            </div>
          </div>
          <div className="container-sm col text-end">
            <span>{price}</span>
            <span style={style.note} className="text-muted">
              {" "}
              */piece
            </span>
            {/* <h6 className="text-muted">*min 3pcs required</h6> */}
            <AddQuantity
              hide={added || !isavailable}
              add={handleinc}
              sub={handledec}
              remove={handledelete}
              quantity={quantity}
            />
            {added?(
              <button
                // disabled={(!selected) && true}
                id="addbtn"
                className="btn btn-sm my-4 "
              >
                ✅Added
              </button>
            ) : (
              <button
                disabled={(!selected ||quantity==='0') && true}
                id="addbtn"
                onClick={handleadd}
                className="btn btn-sm my-4 "
              >
                Add
              </button>
            )}
          </div>
        </div>
        {/* {isavailable?<span class="badge text-bg-success">Available</span>:<span class="badge text-bg-danger">Not available</span>} */}
      </div>

      
    </>
  );
 
};
