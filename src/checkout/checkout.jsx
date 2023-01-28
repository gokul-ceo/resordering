import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import os from './order.png'
import socket from "../socket";
import './checkout.css'
import { useSelector } from "react-redux";
const style = {
    orderhead: {
      height: "52px",
      backgroundColor: "#FF616D",
    },
    brandname: {
      color: "white",
      fontFamily: "Inter,sans-serif",
      fontSize: "20px",
      fontWeight: "bold",
    },
  };
function Checkout(){
  const navigate = useNavigate()
  const [list,setlist] = useState([])
  const [quantity,setquantity] = useState(0)
  const [totalitem,settotalitem] = useState(0)
  var today = new Date()
  var dd = today.getDate();
        var mm = today.getMonth() + 1;
  
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var TodayDate = dd + '/' + mm + '/' + yyyy;
     let {orderid} = useParams();
     function removealert(){
      document.getElementById('alertdiv').style.display = "none"
     }
     function move() {
      var elem = document.getElementById("alertprogressbar");   
      var width = 1;
      var id = setInterval(frame, 50);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++; 
          elem.style.width = width + '%'; 
        }
      }
    }
     useEffect(()=>{
       move()
      setTimeout(() => {
        removealert()
      }, 5000);
     },[])
    //  console.log("Value of socketid in checkout:",localStorage.getItem('linkid'));
    //  console.log("Value of socketid in checkout from module:",socket.id);
     var sid;
  if (socket.id !== localStorage.getItem('linkid')){
    sid = socket.id
  }else{
    console.log("Id mismatch! we are using from module...");
    sid = localStorage.getItem('linkid')
  }
     useEffect(()=>{
      fetch(`http://localhost:4000/checkout/orderdetails/${orderid}?linkid=${sid}`,{
        method:'GET',
        headers:{
            'Accept':'application/json'
        }
    }).then((response)=>response.json())
    .then((json)=>{
        // setMenulist(json);
        setlist(json)
        settotalitem(json.length)
        json.forEach(element => {
          setquantity(quantity+element.Quantity)
        });
         console.log(`Result from server =`,json);
        
    })
     },[orderid])
     function Getsocketid(){
      console.log("Socket id:",socket.id);
     }
    return <>
    <div className="checkout_div">
     <div
        style={style.orderhead}
        className="container-sm sticky-top text-center"
      >
        <span style={style.brandname}>Sri Saravana</span>
      </div>
      <div className="container ">
      <div  id="alertdiv" className="alert  alert-success my-1" role="alert">
      <img  alt="order_placed" src={os} style={{'marginLeft':'14%','marginRight':'20px','width':'20px','height':'20px'}}/>
  Order has been placed!
  <div style={{'backgroundColor':'white','width':'320px','margin':'2px auto -15px auto'}}>
    <div id="alertprogressbar" style={{'height':'2px','width':'0px','backgroundColor':'green'}}></div>
  </div>
</div>
<div  id="order_taken_div" className="alert  alert-success my-1" role="alert">
      <img  alt="order_placed" src={os} style={{'marginLeft':'14%','marginRight':'20px','width':'20px','height':'20px'}}/>
  Your order is getting ready!
  <div style={{'backgroundColor':'white','width':'320px','margin':'5px auto -10px auto'}}>
    <div id="ordertakenprogressbar" style={{'height':'2px','width':'20px','backgroundColor':'green'}}></div>
  </div>
</div>

      </div>
      <div style={{'fontFamily':'Special Elite,cursive'}}  className="StyledReceipt">
        <h6 style={{'marginTop':'1rem'}}>Hotel Sri Saravana</h6>
        <span style={{'fontSize':'16x'}}>NH service Road </span>
        <span style={{'fontSize':'16x'}}>Melmaruvathur-603319</span>
        <h6>Contact - 9965258727</h6>

        <div className="container d-flex justify-content-end">
          <div className="container text-start">
          <span style={{'width':'150px','display':'block'}} >Bill No : 244</span>
          <span>Order Id : {orderid}</span>
          </div>
          <div style={{'marginRight':'0px'}} className="container text-end">
            <span  className="d-block">DATE : {TodayDate}</span>
            <span>TIME: 20:32</span>
          </div>
        </div>
        <hr className="my-1" style={{'borderTop':'2px dashed black','width':'90%','margin':'0 auto'}}/>
        
          <table className="">
            <thead style={{'margin':'0 2px'}}>
              <tr>
                <th  style={{'textAlign':'start','paddingLeft':'15px','width':'130px'}} >ITEM NAME</th>
                <th style={{'width':'50px','padding':'0 8px'}} >QTY</th>
                <th style={{'width':'50px','padding':'0 8px'}} >PRICE</th>
                <th style={{'width':'50px','padding':'0 8px','marginRight':"20px"}} >AMOUNT</th>
              </tr>
            </thead>
        <hr  className="my-1" style={{'borderTop':'2px dashed black','width':'232%','margin':'0 0 0 17px'}}/>
            <tbody>
              {list?.map((item)=>{
                return <tr>
                <td  style={{'textAlign':'start','paddingLeft':'15px','width':'130px'}}>{item.Name}</td>
                <td style={{'width':'50px','padding':'0 8px','textAlign':'end'}}>{item.Quantity}</td>
                <td style={{'width':'50px','padding':'0 8px','textAlign':'end'}}>5.00</td>
                <td style={{'width':'50px','padding':'0 8px','textAlign':'end'}}>10.00</td>

              </tr>})
              }
        <hr className="my-1" style={{'borderTop':'2px dashed black','width':'232%','margin':'0 0 0 17px'}}/>
           <tr>
            <th colSpan={3}>
              TOTAL ITEM(S): {totalitem} /QTY: {quantity}.00
            </th>
            <td style={{'margin':'0 0 0 10px',textAlign:'end'}}>10.00</td>
           </tr>
        <hr className="my-1" style={{'borderTop':'2px dashed black','width':'232%','margin':'0 0 0 17px'}}/>
           <tr>
            <th colSpan={3} style={{'textAlign':'start','paddingLeft':'15px','marginRight':'20px','paddingBottom':'20px'}}>
              TOTAL  
            </th>
            <td style={{'textAlign':'end','paddingBottom':'20px'}}>
              ₹10.00
            </td>
           </tr>
        {/* <hr className="my-1" style={{'borderTop':'2px dashed black','width':'232%','margin':'0 0 0 17px'}}/> */}
          {/* <tr>
            <th colSpan={3} style={{'textAlign':'center','margin':'0 auto'}}>
              THANK YOU VISIT AGAIN
            </th>
          </tr> */}
            </tbody>
          </table>
      
      </div>
      <div>
        <button onClick={Getsocketid}>Get socket id</button>
        
      </div>
      </div>
    </>
}

export default Checkout;