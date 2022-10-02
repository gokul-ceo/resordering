import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const style={
    orderhead:{
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
    <div style={style.orderhead} className='container-sm sticky-top text-center'>
       <span style={style.brandname}>Sri Saravana</span>
    </div>
    </>
}

export default OrderHeader;