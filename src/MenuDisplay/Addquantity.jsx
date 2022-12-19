import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
const style = {
  maindiv: {
    height: "30px",
    width: "5rem",
    // border:'1px solid grey',
    display: "flex",
    padding: "2px",
    justifyContent: "space-between",
    marginTop:'10px',
    marginLeft: "5rem",
    position: "relative",
    bottom: "-7px",
    border: "1px solid grey",
    borderRadius: "20px",
  },
  btn: {
    margin: 0,
    border: "none",
    borderRadius: "10px",
    backgroundColor: "grey",
    width: "50px",
    background: "transparent",
  },
  btnspan: {
    margin: "1px",
    position: "relative",
    bottom: "4px",
    fontSize: "20px",
  },
  spantext: {
    margin: "0 0.3rem",
  },
  delbtn: {
    fontSize: "16px",
  },
};

function AddQuantity(props) {
  // const should_blur = useSelector((state) => state.Gstate.iscartclicked);

  // const[quantity,setquantity]=useState(1)
  // function handleclick(e){
  //     if(e.target.title === 'add'){
  //         const fun = props.action
  //         fun()

  //     }
  //     else{
  //         console.log('value is going to sub');
  //     }
  // }
  return (
    <>
      <div style={style.maindiv} className="container-sm ">
        <button
          onClick={props.add}
          disabled={(props.hide) && true}
          style={style.btn}
        >
          <span title="add" style={style.btnspan}>
            +
          </span>
        </button>
        <span style={style.spantext}>{props.quantity}</span>
        <button
          onClick={props.sub}
          disabled={(props.hide) && true}
          style={style.btn}
        >
          <span title="sub" style={style.btnspan}>
            -
          </span>
        </button>
      </div>
    </>
  );
}

export default AddQuantity;
