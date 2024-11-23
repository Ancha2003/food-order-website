import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
import { MdStars } from "react-icons/md";
import "./Home.css";

function OnlineCart({ item }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleAddToCart = () => {
    addToCart(item); // Add item to cart
    navigate("/cart"); // Redirect to the cart page
  };

  // Log the item to debug missing data
  console.log("OnlineCart item data:", item);

  // Validate that item and item.info exist before rendering
  if (!item || !item.cloudinaryImageId) {
    return <div className="online-cart">Invalid item data</div>;
  }

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
  } = item;

  return (
    <div className="online-cart">
      <div className="abc">
        <img
          src={
            cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
              : "https://via.placeholder.com/150"
          }
          alt={name || "No Image"}
        />
        <button
          className="add-to-cart"
          onClick={handleAddToCart} // Handle adding to cart
        >
          Add to Cart
        </button>
        <Link to={`/demo/${item.id}`}>
          <div className="again"></div>
        </Link>
        <p className="sale">
          {(aggregatedDiscountInfoV3?.header || "") +
            (aggregatedDiscountInfoV3?.subHeader || "")}
        </p>
      </div>
      <div className="detele">
        <h2>{name}</h2>
        <p>
          <MdStars />
          {avgRating || "N/A"}
          <span>{sla?.slaString || "N/A"}</span>
        </p>
        <p className="itemName">{cuisines?.join(", ") || "N/A"}</p>
      </div>
    </div>
  );
}

export default OnlineCart;
