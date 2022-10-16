import { createSlice } from "@reduxjs/toolkit";


export const Globalstate = createSlice({
  name: "Gstate",
  initialState: {
    iscartclicked: false,
    getusername:true,
    isdetails_collected:false,
    username:'',
    phonenumer:'',
    islocalstorage_available:false
  },
  reducers: {
    infomcartclick: (state) => {
      if (state.iscartclicked) {
        state.iscartclicked = false;
      } else {
        state.iscartclicked = false;
      }
    },
    informpageloaded:(state,action) =>{
      state.getusername = false
    },
    change_name:(state,action)=>{
      state.username = action.payload
    }
    ,
    change_phone:(state,action)=>{
      state.phonenumer = action.payload
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

export const { infomcartclick,informpageloaded,setdetails_collected,change_} = Globalstate.actions;
export default Globalstate.reducer;
