import React from "react";
import OnlineCart from "./OnlineCart";

function SomeMore({ datares }) {
  console.log("Data received:", datares); // Debugging log

  return (
    <div className="container mt-5">
      <div className="online">
        {datares.map((item) => (
          <OnlineCart key={item.info.id} item={item.info} />
        ))}
      </div>
    </div>
  );
}

export default SomeMore;
