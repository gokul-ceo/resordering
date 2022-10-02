import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { infomcartclick } from "../redux/Global/globalstate";
const style={
    totalspan:{
        fontSize:'16px',
        backgroundColor:'white',
        height:'25px',
        fontWeight:'bold',
        borderRadius:'20px',
        padding:'0 3px',
        margin:'0.6rem 0'

    },
    cartbtn:{
        height:'30px',
        margin:'0.6rem 0',
        backgroundColor:"transparent",
        border:'0.1px solid green',
        borderRadius:'10px'
    },
    icon:{
        color:'green'
    },
    maindiv:{
        
        height:'111px',
        padding:'0 5px 0 5px',
        backgroundColor:'#FF616D'
    },
    menubtn:{
        backgroundColor:'white',
        height:'25px',
        padding:'0 3px',
        margin:'0.6rem 0 0 8rem'
    },
    cart:{
        // height:'200px',
        // display:'none'
    },
    // totaldiv:{
    //     margin:'5rem 0 0 0'
    // },
    // checkoutbtn:{
    //     margin:'0.8rem 0 0 0'
    // }

}

function OrderFooter(){
    // const totalamount = useSelector(state=>state.total.value)
    // const Itemsfortotal = useSelector(state=>state.total.Itemsfortotal)
    // console.log("Itemsfortotal: ",Itemsfortotal);
    const amount = useSelector(state=>state.total.total)
    const dispatch = useDispatch()
    // console.log("Total Amount: ",amount);
    // console.log(amount);
    const quantity = useSelector(state=>state.quantity.value)
    return <>
    <div style={style.maindiv} className="container-lg fixed-bottom ">
        <div style={style.totaldiv} className=" d-flex  justify-content-between">
        <span style={style.totalspan} >Total:{amount}</span>
        <button style={style.menubtn} type="button" class="btn  btn-sm">Menu</button>
        <button style={style.cartbtn} onClick={()=>dispatch(infomcartclick())} type="button">
         <i style={style.icon} class="fa-solid fa-cart-shopping"></i> {quantity>=1&&<span style={{fontSize:'10px',position:'relative',top:'-0.3rem'}} className="badge  text-bg-secondary">{quantity}</span>}
        </button>
        </div>
        <button style={style.checkoutbtn} type="button" className="btn btn-success btn-lg">
      Checkout
        </button>
        
    </div>
    </>
}

export default OrderFooter;