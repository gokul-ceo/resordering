import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './cart.css'
var cartitems = []


export function Cart(){
    const open = useSelector(state=>state.Gstate.iscartclicked)
    const[shouldopen,setopen] = useState(false)
    cartitems = useSelector(state=>state.orders.OrderArray)
    console.log("CartItems: ",cartitems);
    useEffect(()=>{
        setopen(open)
    },[open])
    // for (let index = 0; index < cartitems.length; index++) {
    //     // console.log("Cartitems individual: ",cartitems[index]);
    //     console.log(cartitems[index][0].Name)
        
    // }
   

    return <>
    { shouldopen?<div id="cart" className="container">
        <h1>Cart</h1>
        <table className="">
            <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {cartitems.map((i)=>{
                    return (
                        <Fragment>
                            <tr key={i.id}>
                                <th>{i[0].Name}</th>
                                <th>{i[0].quantity}</th>
                            </tr>
                        </Fragment>
                    )
                })}
            </tbody>
        </table>

    </div>:null

    }
    
    </>
}
export const updatearray = (name,quantity) =>{
    for(let i=0;i<cartitems.length;i++){
        console.log("Array Items: ",cartitems[i]);
    }
}

