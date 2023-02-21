import React, { useEffect } from "react";
import { useState } from "react";
import "./scroll.css";
import image from "./image.png";
import Availablebox from "./Availablebox";
// import { server_url } from "../worker";
const server_url = "http://localhost:4000/";

function AlsoAvailablediv(props) {
  const [itemlist, setitemlist] = useState([]);
  useEffect(() => {
    fetch(`${server_url}customer/menu?type=extras`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // setmenu(json);
        setitemlist(json);
        //  setloading(false)
      });
  }, []);

  return (
    <>
      <div className="container">
        <h4>Also available..</h4>
        <div>
          <div id="scrollBox">
            {itemlist?.map((item) => {
              return (
                <Availablebox
                  status={item.Available}
                  price={item.Price}
                  name={item.Item}
                />
              );
            })}
          </div>
        </div>
        {/* <div style={{'display':'grid','gridAutoFlow':'column','gridAutoColumns':'21%','gap':'2rem','overflowX':'auto'}} className="container">
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
            <div style={{'height':'100px','width':'100px','backgroundColor':'grey','display':'inline-block'}}>
                k
            </div>
        </div> */}
      </div>
    </>
  );
}

export default AlsoAvailablediv;
