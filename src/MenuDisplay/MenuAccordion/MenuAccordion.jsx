import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MenuBox } from "./MenuBox";
import './MenuBox.css'
import { useSelector } from "react-redux";

function MenuAccordion(props){
    const should_blur = useSelector(state=>state.Gstate.iscartclicked)
  const style={
    blurmaindiv:{
      filter:'blur(4px)',
      overflow:'hidden',
    }
  }
  // useEffect(()=>{
  //   document.body.style.overflow="hidden";
  // },[should_blur])
    return <>
    <div style={should_blur?style.blurmaindiv:null} className="accordion my-3" id="accordionPanelsStayOpenExample">
  <div className="accordion-item" id="accordion-title">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" id="openbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Idly's
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <MenuBox price={'5'} name={'Idly'}/>
        <MenuBox price={'5'} name={'Dosa'}/>
        <MenuBox price={'5'} name={'Vadai'}/>
        <MenuBox price={'5'} name={'pongal'}/>
        <MenuBox price={'5'} name={'masala dosai'}/>

      </div>
    </div>
  </div>
  <div className="accordion-item" id="accordion-title">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" id="openbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Item name
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <MenuBox/>
        <MenuBox/>
        <MenuBox/>
        <MenuBox/>
        <MenuBox/>

      </div>
    </div>
  </div>
  <div className="accordion-item" id="accordion-title">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" id="openbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Item name
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <MenuBox/>
        <MenuBox/>
        <MenuBox/>
        <MenuBox/>
        <MenuBox/>
      </div>
    </div>
  </div>
</div>
    </>
    
}
export default MenuAccordion;