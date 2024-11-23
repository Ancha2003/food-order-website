import React, { useEffect, useState } from "react";
import Mind from "./Mind";
import ResPart from "./ResPart";
import Online from "./Online";

function HomePage() {
  const [restaurant, setRestaurant] = useState([]);
  const [datares, setDatares] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setRestaurant(
        result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []
      );
      setDatares(
        result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setRestaurant([]);
      setDatares([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Mind restaurant={restaurant} />
      <ResPart datares={datares} />
      <Online datares={Array.isArray(datares) ? datares : []} />
    </>
  );
}

export default HomePage;
