import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from "./feature/Quantity/quantitySlice";
import OrderReducer from "./feature/order/Orders";
import totalReducer from "./feature/total/totalSlice";
import globalstate from "./Global/globalstate";
import reset from "./feature/reset/reset";
import userdetails from "./feature/userdetails";
export default configureStore(
  {
    reducer: {
      quantity: quantityReducer,
      orders: OrderReducer,
      total: totalReducer,
      Gstate: globalstate,
      cart_reset: reset,
      userdetails:userdetails
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
    