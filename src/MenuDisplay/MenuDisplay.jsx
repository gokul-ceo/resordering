import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAccordion from "./MenuAccordion";
import Recommendeddiv from "./Recomended";
import AlsoAvailablediv from "./Alsoavailablediv";

function MenuDisplay() {
  return (
    <>
    <Recommendeddiv/>
    <AlsoAvailablediv/>
    <MenuAccordion />
    </>
  );
}

export default MenuDisplay;
