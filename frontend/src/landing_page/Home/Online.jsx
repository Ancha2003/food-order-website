import React, { useEffect, useState } from "react";

function SomeMore() {
  const [data,setdata] = useState([]);

  async function etchData(){
    const data = await fetch("/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result = await data.json();
    // console.log(result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setdata(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  }

  useEffect(()=>{
    etchData()
  },[])


  return ( 
    <div className="container">
      {
        data.map((item,i)=>(
          <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.info?.cloudinaryImageId
                }
             alt={item.name || 'food'} ></img>
        ))
      }
    </div>
   );
}

export default SomeMore;