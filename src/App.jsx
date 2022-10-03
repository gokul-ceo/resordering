import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import OrderHeader from "./OrderHeader";
import OrderType from "./OrderType";
import MenuDisplay from "./MenuDisplay/MenuDisplay";
import store from "./redux/store";
import OrderFooter from "./OrderFooter/Orderfooter";
import { Cart } from "./cart/cart";
function App() {
  return (
    <>
      <Provider store={store}>
        <OrderHeader />
        <OrderType />
        <MenuDisplay />
        <OrderFooter />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
