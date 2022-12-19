import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import welcomeimg from './foodorderimage.jpg'
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
function OrderHeader() {
  const name = useSelector(state=>state.Gstate.username)
  return (
    <>
      <div
        style={style.orderhead}
        className="container-sm sticky-top text-center"
      >
        <span style={style.brandname}>Sri Saravana</span>
      </div>
      <div className="container-sm">
        <div className="row">
          <div className="col-8" >
          <span className="fs-2" style={{'fontFamily':'Poppins,sans-serif'}}>Welcome {name}</span>
          <p style={{'fontFamily':'Inter,sans-serif'}}>Select your breakfast</p>
          
          </div>
          <div className="col" >
            <img alt="foodoreder" style={{'height':'90px','width':'90px','marginTop':'0.6rem'}} src={welcomeimg}/>
          </div>

        </div>
        
      </div>
    </>
  );
}

export default OrderHeader;
