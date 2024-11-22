import React from "react";
import OnlineCart from "./OnlineCart";


function SomeMore({ datares }) {
  return (
    <div className="container mt-5">
      <div className="online">
        {datares.map((item ) => (
          <OnlineCart {...item}/>
        ))}
      </div>
    </div>
  );
}

export default SomeMore;