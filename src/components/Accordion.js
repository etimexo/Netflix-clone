import React from "react";
import "../components/accordion.css";
import Chevron from "./Chevron";
import { useState } from "react";
import { useRef } from "react";
export default function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  // function toggleAccordion() {
  //   setActiveState(setActive === "" ? "active" : "");
  //   setHeightState(
  //     setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
  //   );
  //   setRotateState(
  //     setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
  //   );
  // }
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `fit-content`); // Change this line
    setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
  }

  return (
    <>
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <Chevron className={`${setRotate}`} width={30} fill={"#777"} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </>
  );
}
