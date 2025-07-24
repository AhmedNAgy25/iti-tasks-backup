import React from "react";
import Buttons from "./Buttons";

function Items({ item, operation }) {
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.count}</p>
      <Buttons
        operation={() => {
          operation.increase(item);
        }}
        content={"+"}
      />
      <Buttons
        operation={() => {
          operation.decrease(item);
        }}
        content={"-"}
      />
      <Buttons
        operation={() => {
          operation.delete(item);
        }}
        content={"delete"}
      />
    </>
  );
}

export default Items;
