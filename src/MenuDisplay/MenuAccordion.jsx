import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuBox } from "./MenuBox";
import "./MenuBox.css";
import { useSelector } from "react-redux";
import idlyimg from './idly.png'
import dosaimg from './dosa.png'
import vadaiimg from './vadai.png'
import pooriimg from './poori.png'
// import axios from 'axios'
// import {socket} from './socket.js'
// const Menulist = []
function MenuAccordion() {
//  axios.get("http://localhost:4000/")
//  .then(function(response){
//   console.log("Response from server: ",response);
//   Menulist.push(response.data);
//   for(let i=0;i<=Menulist.length;i++){
//     console.log("Menulistitems: ",Menulist);
//   }
//  })
  // const should_blur = useSelector((state) => state.Gstate.iscartclicked);
  const style = {
    blurmaindiv: {
      filter: "blur(4px)",
      overflow: "hidden",
    },
    accordionbtn:{
      backgroundColor:'#FFD1D1',
      border:'none',
      Outline:'none',
      color:'#E26868'

    }
   
  };
  // socket.on("menulist",(arg)=>{
  //   console.log("Menu recieved from server: ",arg);
  //   Menulist.push(arg)

  // })
  // for(let i=0;i<=Menulist.length;i++){
  //   console.log(Menulist[i]);
  // }
 
  // console.log("Menu list from socket: ",menulist);
  return (
    <>
      <div
        // style={s? style.blurmaindiv : null}
        className="accordion my-3"
        id="accordionPanelsStayOpenExample"
      >
        <div className="accordion-item" id="accordion-title">
          <h2 className="accordion-header text-danger " id="panelsStayOpen-headingOne">
            <button
              style={style.accordionbtn}
              className="accordion-button "
              id="openbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Idly types
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <MenuBox price={"5"} img={idlyimg} name={"Idly"} />
              <MenuBox price={"5"} img={dosaimg} name={"Dosa"} />
              <MenuBox price={"5"} img={vadaiimg} name={"Vadai"} />
              <MenuBox price={"5"} img={pooriimg} name={"pongal"} />
              <MenuBox price={"5"} img={idlyimg} name={"masala dosai"} />
            </div>
          </div>
        </div>
        <div className="accordion-item" id="accordion-title">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              style={style.accordionbtn}
              id="openbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Item name
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              {/* <MenuBox />
              <MenuBox />
              <MenuBox />
              <MenuBox />
              <MenuBox /> */}
            </div>
          </div>
        </div>
        <div className="accordion-item" id="accordion-title">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              style={style.accordionbtn}
              id="openbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Item name
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              {/* <MenuBox />
              <MenuBox />
              <MenuBox />
              <MenuBox />
              <MenuBox /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuAccordion;
