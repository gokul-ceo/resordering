import { createSlice } from "@reduxjs/toolkit";



export const Globalstate = createSlice({
  name: "Gstate",
  initialState: {
    iscartclicked: false,
    getusername:true,
    isdetails_collected:false,
    username:'',
    phonenumer:'',
    islocalstorage_available:false,
    checkoutstatus:false
  },
  reducers: {
    infomcartclick: (state) => {
      if (state.iscartclicked) {
        state.iscartclicked = false;
      } else {
        state.iscartclicked = true;
      }
    },
    changecheckoutstatus:(state)=>{
      state.checkoutstatus = true;
    },
    informpageloaded:(state,action) =>{
      state.getusername = false
    },
    change_name:(state)=>{
      state.username = localStorage.getItem('UserName')
    }
    ,
    change_phone:(state)=>{
      state.phonenumer = localStorage.getItem('Phone')
    },
    setdetails_collected:(state)=>{   
      // console.log("dispatch is called!!");
      state.isdetails_collected = true
      state.getusername = false
    },
    localstorage_access:(state)=>{
      state.islocalstorage_available = true
    }
  },
});

export const { infomcartclick,changecheckoutstatus,informpageloaded,setdetails_collected,change_name,change_phone} = Globalstate.actions;
export default Globalstate.reducer;
