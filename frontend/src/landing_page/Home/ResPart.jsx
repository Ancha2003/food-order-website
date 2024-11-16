import React, { useEffect, useState } from "react";
// import { MdStars } from "react-icons/md";
// import { Link } from "react-router-dom";
// import "./Home.css";

function ResPart() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const nextSlide = () => {
    if (slide > 3.8) return false;
    console.log(slide);
    setSlide(slide + 0.5);
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 0.5);
  };

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container broder">
      <div className="space">
        <div className="contain">
          <h2>Top restaurant chain in Atarra</h2>
        </div>
        <div className="move">
          <span id="left" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </span>
          <span id="right" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="container mt-3 menu mb-3">
        <div
          className="menu-row"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {data.map((item) => (
            <div className="img">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.info?.cloudinaryImageId
                }
            alt={item.name || 'food image'}  ></img>
              <div className="gradent"></div>

              <p className="sale">
                {item?.info?.aggregatedDiscountInfoV3?.header +
                  item?.info?.aggregatedDiscountInfoV3?.subHeader}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResPart;
