import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrderArray } from "../redux/feature/order/Orders";
import { resetquantity } from "../redux/feature/Quantity/quantitySlice";
import { informreset, INFO_RESET_DONE } from "../redux/feature/reset/reset";
import { resettotal } from "../redux/feature/total/totalSlice";
import { infomcartclick } from "../redux/Global/globalstate";
import "./cart.css";
export var cartitems = [];

export function Cart() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.Gstate.iscartclicked);
  const [shouldopen, setopen] = useState(false);
  cartitems = useSelector((state) => state.orders.OrderArray);
  // console.log("Index of Name: ",);
  console.log("CartItems: ", cartitems);
  // const dispatch = useDispatch()
  useEffect(() => {
    setopen(open);
  }, [open]);
  function resetcart() {
    dispatch(infomcartclick());
    dispatch(informreset());
    dispatch(resettotal());
    dispatch(resetOrderArray());
    dispatch(resetquantity());
    
    setopen(false);

    dispatch(INFO_RESET_DONE())
    
  }
  // for (let index = 0; index < cartitems.length; index++) {
  //     // console.log("Cartitems individual: ",cartitems[index]);
  //     console.log(cartitems[index][0].Name)

  // }

  //     const removeOrderfromarray = (event,itemname)=>{
  //     const result = []
  //     for(let i=0;i<cartitems.length;i++){
  //         console.log("Cartitems in loop: ",cartitems[i].ITEM.Name);
  //         if(cartitems[i].ITEM.Name!==itemname){
  //             result.push(cartitems[i]);
  //             break;

  //         }
  //         console.log("Result array:  ",result);
  //     }
  //     dispatch(removeOrder(result))
  //     console.log("Item has been removed!!");
  //     // dispatch(removeOrder(result))

  // }
  const style = {
    btn: {
      margin: 0,
      border: "none",
      borderRadius: "10px",
      backgroundColor: "grey",
      width: "50px",
      background: "transparent",
    },
    restbtn: {
      border: "none",
      borderRadius: "20px",
      height: "20px",
      fontSize: "13px",
      fontWeight: "bold",
      marginTop: "0.3rem",
      backgroundColor: "lightblue",
    },
  };

  return (
    <>
      {shouldopen ? (
        <div id="cart" className="container">
          <div className="container d-flex justify-content-between">
            <h1>Cart</h1>
            <button style={style.restbtn} onClick={resetcart}>
              Reset Cart
            </button>
          </div>
          <table className="">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartitems.map((i) => {
                return (
                  <Fragment>
                    <tr key={i.id}>
                      <td>{i.ITEM.Name}</td>
                      <td>{i.ITEM.Quantity}</td>
                      <td>{i.ITEM.Price}</td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}
