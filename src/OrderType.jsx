import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const style={
    maindiv:{
        width:'324px',
        height:'25px',
        borderRadius:'10px',
        backgroundColor:'#D9D9D9'
    },
    spanfont: {
        fontFamily:'Roboto,sans-serif',
        fontWeight:'Bold',
        fontSize:'16px'

    }
}

function OrderType(){
    // const  selectdiv = {
    //     width:'81px',
    //     height:'21px',
    //     borderRadius:'12px',
    //     backgroundColor:'#FFA4A4',
    //     marginTop:'0.1rem',
    //     textAlign:'center'
    // }  

    return <>
    <div style={style.maindiv} className="container-sm d-flex justify-content-between my-2">
        <div title="testing"  id='0'>
      <span style={style.spanfont}>Take-Away</span>
      </div>
      <div id='1' >
      <span style={style.spanfont}>Dine-in</span>
      </div>
      <div id='2'>
      <span style={style.spanfont}>Delivery</span>
      </div>

    </div>
    </>
}


export default OrderType;