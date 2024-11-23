import React from "react";
import { Link } from "react-router-dom";
import { MdStars } from "react-icons/md";
import "./Home.css";

function OnlineCart(item) {
  return (
    <div className="online-cart">
      <div className="abc">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item?.info?.cloudinaryImageId
          }
          alt="no"
        />
        <button
          className="add-to-cart"
          onClick={() => (window.location.href = "/cart")}
        >
          Add to Cart
        </button>
        <Link to={`/demo/${item.info.id}`}>
          <div className="again"></div>
        </Link>
        <p className="sale">
          {item?.info?.aggregatedDiscountInfoV3?.header +
            item?.info?.aggregatedDiscountInfoV3?.subHeader}
        </p>
      </div>

      <div className="detele">
        <h2>{item?.info?.name}</h2>
        <p>
          <MdStars />
          {item?.info?.avgRating}
          <span>{item?.info?.sla?.slaString}</span>
        </p>
        <p className="itemName">{item?.info?.cuisines.join(" , ")}</p>
      </div>
    </div>
  );
}

export default OnlineCart;
