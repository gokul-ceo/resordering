import React from "react";
import "./login.css";
import { useState } from "react";
// import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import hello from "./hello.gif";
var date = new Date();
var year = date.getFullYear();
function Loginpage() {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [name, setname] = useState(null);
  const [phone, setphone] = useState(null);
  const handlenamechange = (e) => setname(e.target.value);
  const handlephonechange = (e) => setphone(e.target.value);
  const server_url = "http://localhost:4000/";
  function handlesubmit(e) {
    e.preventDefault();
    var customerid = Date.now();
    var data = { name, phone };
    navigate("/");
    //for developmement
    // if (name && phone !== null) {
    //   setloading(true);
    //   fetch(`${server_url}api/registercustomer/${customerid}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) => response.json())
    //     .then((json) => {
    //       sessionStorage.setItem("Customertoken", json);
    //       sessionStorage.setItem("UserName", name);
    //       sessionStorage.setItem("Phone", phone);
    //       setloading(false);
    //       navigate("/");
    //     });
    // }
  }
  var mt = window.innerHeight / 6;
  return (
    <>
      <div
        style={{ width: "300px", marginTop: `${mt}px` }}
        className="container-sm align-center shadow shadow-lg"
      >
        <img
          alt="alt"
          style={{ width: "150px", height: "150px", marginLeft: "20%" }}
          src={hello}
        ></img>
        <div className=" container-sm my-1 text-center ">
          <h5 className="my-2">Login to continue..</h5>
          <div class="form-floating mb-3  ">
            <input
              onChange={handlenamechange}
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="mb-3">
            <div class="form-floating">
              <input
                onChange={handlephonechange}
                type="number"
                class="form-control"
                id="floatingPassword"
                placeholder="Phone number"
              />
              <label for="floatingPassword">Phone number</label>
              <div id="email" class="form-text">
                Enter valid mobile number to recive otp!
              </div>
            </div>
          </div>
          {loading ? (
            <span class="loader"></span>
          ) : (
            <button
              onClick={handlesubmit}
              className="btn mb-3 my-2 btn-primary"
            >
              Submit
            </button>
          )}
          <div>
            <span style={{ fontSize: "12px" }} className="mx-1">
              Terms & condition{" "}
            </span>
            <span style={{ fontSize: "12px" }} className="">
              {" "}
              |{" "}
            </span>
            <span style={{ fontSize: "12px" }} className="mx-1">
              Privacy policy
            </span>
          </div>
          <span style={{ margin: "0 auto", fontSize: "12px" }}>
            {" "}
            ©️copyright {year}
          </span>
        </div>
      </div>
    </>
  );
}
export default Loginpage;
