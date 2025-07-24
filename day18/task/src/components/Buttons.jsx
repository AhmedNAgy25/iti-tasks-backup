import React from "react";

function Buttons({ operation, content }) {
  return (
    <>
      <button onClick={operation} className="btn btn-primary">
        {content}
      </button>
    </>
  );
}

export default Buttons;
