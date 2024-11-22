import React from "react";
import { Link } from "react-router-dom";


 function MindCart(item){
  return(
    <Link to={`/demo/${item.id}`}>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="no"></img>
    </Link>
  )
 }

 export default MindCart;