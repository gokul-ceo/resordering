import React from "react";
export function StarIcon(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={props.style.iconstyle}
        fill="currentColor"
        className="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    </>
  );
}
export function AddIcon(props) {
  return (
    <>
      <div
        onClick={props.action}
        value="1"
        style={{ height: "20px", margin: "0" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={props.style.iconstyle}
          fill="currentColor"
          className="bi bi-plus-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
    </>
  );
}
export function MinusIcon(props) {
  return (
    <>
      <div
        onClick={props.action}
        value="2"
        style={{ height: "20px", margin: "0" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={props.style.iconstyle}
          values="-"
          fill="currentColor"
          className="bi bi-dash-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
        </svg>
      </div>
    </>
  );
}
