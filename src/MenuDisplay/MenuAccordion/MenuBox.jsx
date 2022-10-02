import React, {  useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './image.png'
import './MenuBox.css'
import AddQuantity from "./Addquantity";
import { useDispatch, useSelector } from "react-redux";
import { addorders, updatequantity } from "../../redux/feature/order/Orders";
import { decrement, increment } from "../../redux/feature/Quantity/quantitySlice";
import { addamount, reduceamount } from "../../redux/feature/total/totalSlice";
import { updatearray } from "../../cart/cart";
// import { addamount } from "../../redux/feature/total/totalSlice";
// import { addamount, reduceamount } from "../../redux/feature/total/totalSlice";
// import { useDispatch,useSelector } from "react-redux";
// import {  addorders} from "../../redux/feature/order/Orders";
const style = {
    image:{
    width:'60px',
    heigth:'60px'
    },
    addbtn:{
        heigth:'60px'
    },
    note:{
        fontSize:"12px"
    }
}
var total = 0;
export const MenuBox = (props) => {
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
    const dispatch = useDispatch()
    const itemName = props.name
    // const dispatch = useDispatch()
    const cartquantity = useSelector(state=>state.quantity.value)
   
    
    // const[total,settotal] = useState(0)
    // const finalyarray = useSelector(state=>state.orders.FinalyOrderArray)
    const orderarr = useSelector(state=>state.orders.OrderArray)
    const[added,setadd]=useState(false)
    const[quantity,setquantity] = useState(1)
    // const orderarr=[Name,quantity]
    // const[order,setorder] = useState({Name,quantity,price})
    const[prevtotal,setprevioustotal] = useState(0)
    const cartitems = useSelector(state=>state.orders.OrderArray)
    function handleinc(){
        if(added){

        
        setquantity(quantity+1)
       
       
        setprevioustotal(total)
       dispatch(updatequantity({itemName,quantity}))
        }else{
            console.log("Item is not added in cart");
        }
        console.log("Testing: ",orderarr[1]);
        // settotal(total * price)
        // console.log('Quantity: ',quantity);
        // console.log("Price: ",price);
        // console.log("Total Price of "+{Name}+" is: ",total);
        // dispatch(addamount(total))
       
    }
    
    function handledec(){
        if(added){
        if(quantity!==0&&quantity!==1){setquantity(quantity-1)}
        
        
        setprevioustotal(total)
        }else{
            console.log("Item is not added in cart");
        }
       

    }
    function handledelete(){
        setadd(false)
        if(cartquantity>0){
        dispatch(decrement())
        }
    }
    useEffect(()=>{
        setquantity(quantity)
        // setorder({Name,quantity})
    },[quantity,itemName,price])
    //------------------------------------ Handle Add Function ---------------------------------------------------------//
    function handleadd(){
        
        dispatch(increment())
        setadd(true)
        // console.log('order: ',order);
        total=quantity*price;
        dispatch(reduceamount(prevtotal))
        dispatch(addamount(total))
        dispatch(addorders({[itemName]:{Quantity:quantity,Price:price}}))
        console.log("CartItems in MenuBox: ",cartitems);
        console.log("OrderArray: ",orderarr);
        updatearray(itemName)

        // <Toast/>
        // console.log("Total: ",total);
        // ORDER_ARRAY.push(order)
        // console.log("Order: ",order);
        
        
        // console.log("Result OrderArray: ",result);
        // console.log(ORDER_ARRAY);
        
    }


    // const result = useSelector(state=>state.orders.OrderArray)
    return <>
    <div className="container-sm ">
        <div className="row">
        <div className="container-sm col">
        <img style={style.image} src={img} alt="image_png"/>
        <h6 className="w-50 my-2">{props.name}</h6>
        <span style={{fontSize:'12px',position:'relative',top:'-8px'}}>⭐</span>
        </div>
        <div className="container-sm col text-end">
            <span>₹7.99</span><span style={style.note} className="text-muted"> */piece</span>
            {/* <h6 className="text-muted">*min 3pcs required</h6> */}
            <AddQuantity action add={handleinc} sub={handledec} remove={handledelete} quantity={quantity}/>
            {added?<button id="addbtn" className="btn btn-sm my-3 ">✅Added</button>:<button id="addbtn" onClick={handleadd} className="btn btn-sm my-3 ">Add</button>}
        </div>
        </div>
    </div>
    
    <hr/>
    </>
}

