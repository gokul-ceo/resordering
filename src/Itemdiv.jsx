import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { StarIcon } from "./Icons";
import ADD from "./ADD";
const style={
    maindiv:{
        height:'72px',
        width:'319px',
        borderRadius:'10px',
        backgroundColor:'#D8D8D8'
    },
    image:{
        width:'60px',
        height:'60px',
        margin:'6px 0 0 -5px'
    },
    iconstyle:{
        width:'10px',
        height:'10px',
        padding:'0',
        marginRight:'2px'
        
    },
    stardiv:{
        padding:'0',
    }
}
export function MenuItem(props){
    const[quantity,setquantity] = useState(0)
    function increment(){
        setquantity(quantity + 1)
    }
    function decrement(){
        if(!quantity<=0){
            setquantity(quantity-1)
        }
    }
    const count = useSelector(state=> state.quantity.value)
    return <>
    <div style={style.maindiv} className="container-sm d-flex my-2">
      <img style={style.image} src={require("./image.png")} alt="sample_image"/>
      <div className="container-sm">
        <span style={{userSelect:'none'}} >{props.name}</span>
        <div style={style.stardiv} className="container-sm  d-inline-flex">
            <StarIcon style={style}/>
            <StarIcon style={style}/>
            <StarIcon style={style}/>
            <StarIcon style={style}/>
            <StarIcon style={style}/>


        </div>
      </div>
      <div className="container text-center">
        <span style={{userSelect:'none'}} >₹7.99</span>
        <ADD addaction={increment} subaction = {decrement}/>
      </div>
      <span style={{userSelect:'none'}}>{count}</span>
    </div>
    </>
}
