import React from "react";

export default function Chevron(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
      width={props.width}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}
