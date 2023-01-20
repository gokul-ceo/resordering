import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "./feature/Quantity/quantitySlice";
import OrderReducer from "./feature/order/Orders";
import totalReducer from "./feature/total/totalSlice";
import globalstate from "./Global/globalstate";
import reset from "./feature/reset/reset";
import userdetails from "./feature/userdetails";
import Menu_State_Slice from "./Menustate/Menu_states_Slice";
export default configureStore(
  {
    reducer: {
      quantity: quantityReducer,
      orders: OrderReducer,
      total: totalReducer,
      Gstate: globalstate,
      cart_reset: reset,
      userdetails:userdetails,
      menustatus:Menu_State_Slice
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
    