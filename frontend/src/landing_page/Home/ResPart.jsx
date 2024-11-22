import React, { useEffect, useState } from "react";

function ResPart() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const nextSlide = () => {
    if (slide > 3.8) return;
    setSlide(slide + 0.5);
  };

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 0.5);
  };

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await response.json();
      console.log(result);

      setData(
        result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
            {/* SVG for left arrow */}
          </span>
          <span id="right" onClick={nextSlide}>
            {/* SVG for right arrow */}
          </span>
        </div>
      </div>
      <div className="container mt-3 menu mb-3">
        <div
          className="menu-row"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {data.length > 0 ? (
            data.map((item) => (
              <div className="img" key={item.info.id}>
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item?.info?.cloudinaryImageId
                  }
                  alt={item?.info?.name || "food image"}
                />
                <div className="gradent"></div>
                <p className="sale">
                  {item?.info?.aggregatedDiscountInfoV3?.header +
                    item?.info?.aggregatedDiscountInfoV3?.subHeader}
                </p>
              </div>
            ))
          ) : (
            <p>Loading restaurants...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResPart;
