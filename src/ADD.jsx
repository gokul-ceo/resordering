import React from 'react';
import { AddIcon, MinusIcon } from './Icons';
const style={
    add:{
        width:'95px',
        height:'1.4rem',
        borderRadius:'24px',
        backgroundColor:'#FE7474'
    },
    iconstyle:{
        width:'12px',
        height:'12px',
        marginBottom:'5px',
        marginLeft:'4px'
    },
    spanstyle:{
        margin:'.6rem',
        position:'relative',
        bottom:'.2rem',
        fontSize:'10px',
        fontWeight:'bold',
        fontFamily:'Inter,sans-serif',
        userSelect:'none'
    }
}
function ADD(props){
    // console.log(props);

    return <>
    
    <div style={style.add} className="container my-3 ms-2 text-center d-flex justify-content-between">
        <AddIcon action={props.addaction}  style={style} />
       <span style={style.spanstyle}>Add</span>
       <MinusIcon action={props.subaction}   style={style} />
    </div>
    </>
}

export default ADD;