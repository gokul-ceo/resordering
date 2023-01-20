import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuAccordion from "./MenuAccordion";

function MenuDisplay() {
  return (
    <>
    <div className="overflow-auto">
    <MenuAccordion />
    </div>
    </>
  );
}

export default MenuDisplay;
