import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addorders } from "../redux/feature/order/Orders";
import image from './image.png'
import idly from './idly.png'
import vadai from './vadai.png'
import {
    decrement,
    increment,
  } from "../redux/feature/Quantity/quantitySlice";
import { addamount } from "../redux/feature/total/totalSlice";

const style = {
    maindiv: {
      height: "30px",
      width: "5rem",
      // border:'1px solid grey',
      display: "flex",
      padding: "2px",
      justifyContent: "space-between",
      position: "relative",
      bottom: "-7px",
      border: "1px solid grey",
      borderRadius: "20px",
    },
    btn: {
      margin: "0 auto",
      border: "none",
      borderRadius: "10px",
      backgroundColor: "grey",
      width: "50px",
      background: "transparent",
    },
    btnspan: {
      margin: "1px",
      position: "relative",
      bottom: "4px",
      fontSize: "20px",
    },
    spantext: {
      margin: "0 0.3rem",
    },
    delbtn: {
      fontSize: "16px",
    },
  };
function Availablebox(props){
    var status = props.status
    const [hide,sethide] = useState(false)
  
    const[verified,setverified] = useState(false)
    const[isavailable,setavailable] = useState(false)
    var price = props.price
  const dispatch = useDispatch()
    useEffect(()=>{
      if(!status){
       sethide(true)
      }else if (status){
        setavailable(true)
      }
    },[status])
    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      const itemName = cap(props.name);
    function handleinc() {
        setselected(true);
    
        setquantity(quantity + 1);
      }
      function handledec() {
        if (quantity !== 0) {
          setquantity(quantity - 1);
        }

      }
      function handleadd() {
          
        dispatch(increment());
        setadd(true);
        // console.log('order: ',order);
        var total = quantity * price;
        // dispatch(reduceamount(prevtotal));
        dispatch(addamount(total));
        dispatch(
          addorders({ Name: itemName, Quantity: quantity, Price: price } )
        );
        // console.log("CartItems in MenuBox: ", cartitems);
        // console.log("OrderArray: ", orderarr);
    
      }
      function handledelete() {
        setselected(false);
        setadd(false);
        setadd(false);
        setquantity(0);
      }
    const [added, setadd] = useState(false);
    const [quantity, setquantity] = useState(0);
    const [selected, setselected] = useState(false);
    useEffect(()=>{
        if(quantity===0){
          setselected(false)}
      },[quantity])
    function ADdquantity(props){
        return <>
              <div style={style.maindiv} className="container ">
        <button
          onClick={props.add}
          disabled={(props.hide) && true}
          style={style.btn}
        >
          <span title="add" style={style.btnspan}>
            +
          </span>
        </button>
        <span style={style.spantext}>{props.quantity}</span>
        <button
          onClick={props.sub}
          disabled={(props.hide) && true}
          style={style.btn}
        >
          <span title="sub" style={style.btnspan}>
            -
          </span>
        </button>
      </div>
        </>
    } 
    return <>
         <div style={{'border':'1px solid green','width':'120px','paddingBottom':'10px'}} className=" my-2 firstPanel">
               <img src={idly} alt='someimage' style={{'width':'100%','height':'100px'}}/>
               <div style={{'height':'100px'}} className="text-center">
                <div style={{'overflow':'auto'}}>
                <span>{itemName}</span>
                </div>
                <ADdquantity
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
                style={{'margin':'0 auto 0 auto'}}
                className="btn btn-sm my-3"
              >
                ✅Added
              </button>
            ) : (
              <button
                disabled={(!selected ||quantity==='0') && true}
                id="addbtn"
                onClick={handleadd}
                style={{'margin':'0 auto 0 auto'}}
                className="btn btn-sm my-3"
              >
                Add
              </button>
            )}
               </div>
            </div>
    </>
}

export default Availablebox;