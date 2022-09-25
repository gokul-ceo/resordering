import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const style={
    orderhead:{
        width:'360px',
        height:'52px',
        backgroundColor:'#FF616D'
    },
    brandname:{
        color:'white',
        fontFamily:'Inter,sans-serif',
        fontSize:'20px',
        fontWeight:'bold',
    }
}
function OrderHeader(){
    return <>
    <div style={style.orderhead} className='container-sm text-center'>
       <span style={style.brandname}>Sri Saravana</span>
    </div>
    </>
}

export default OrderHeader;