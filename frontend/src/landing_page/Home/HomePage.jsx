import React,{useEffect,useState} from 'react';
import Mind from './Mind';
import ResPart from './ResPart';
import Online from './Online';



function HomePage() {
  const [restaurant, setrestaurant] = useState([]);
  const [datares ,setdatares]  = useState([]);

  async function fetchData() {
    const data = await fetch(
      "/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    // console.log(
    //   result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    // );
    setrestaurant(
      result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setdatares(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    fetchData();
  }, []);
  return ( 
    <>
    <Mind restaurant={restaurant}/>
    <ResPart datares={datares}/>
    <Online datares={datares}/>
    </>
   );
}

export default HomePage;