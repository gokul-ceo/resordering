import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const style = {
    maindiv:{
       height:'30px',
       width:'5rem',
        // border:'1px solid grey',
        display:'flex',
        padding:'2px',
        justifyContent:'space-between',
        marginLeft:"5rem",
        position:'relative',
        bottom:'-7px',
        border:'1px solid grey',
        borderRadius:'20px'
        
    },
    btn:{
        margin:0,
        border:'none',
        borderRadius:'10px',
        backgroundColor:"grey",
        width:'50px',
        background:'transparent'
        
    
    },
    btnspan:{
        margin:'1px',
        position:'relative',
        bottom:'4px',
        fontSize:'20px'
    },
    spantext:{
        margin:'0 0.3rem'
    },
    delbtn:{
        fontSize:'16px'
    }
   
}

function AddQuantity(props){
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
    return <> 
    <div style={style.maindiv} className="container-sm ">
        <button  style={style.btn}><span title="add" onClick={props.add}  style={style.btnspan}>+</span></button>
        <span style={style.spantext}>{props.quantity}</span>
        {props.quantity=="1"?<button  style={style.btn}><span title="sub" onClick={props.remove} style={style.delbtn}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style={{position:'relative',top:'-.1rem'}} fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></span></button>:<button  style={style.btn}><span title="sub" onClick={props.sub} style={style.btnspan}>-</span></button>}
        
    </div>
    </>

}

export default AddQuantity;