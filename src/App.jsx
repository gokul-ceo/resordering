import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./Auth";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Redirect,
} from "react-router-dom";
// import OrderType from "./OrderType";
import Homeorder from "./Homeorder";
import Loginpage from "./Loginorder/login";
import Checkout from "./checkout/checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <PrivateRoute>
              <Homeorder />
              //  </PrivateRoute>
            }
          />
          <Route path="login" element={<Loginpage />} />
          <Route path="order">
            <Route path=":orderid" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
