import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Mind() {
  return (
    <div className="container flex mb-5 mt-4">
      <div className="space">
        <div className="">
          <h2>What's on your mind?</h2>
        </div>
        <div className="arrow">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
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
      <div className="foodLink">
        <Link to="" target="_self">
          <img src="\image\Pizzas.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Cake.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Biryani.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Burger.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Chinese.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\GulabJamun.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Ice-Cream.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Momos.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Noodles.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\North India.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Paratha.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Pasta.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Rolls.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Shake.avif"></img>
        </Link>
        <Link to="" target="_self">
          <img src="\image\Somasa.avif"></img>
        </Link>
      </div>
    </div>
  );
}

export default Mind;
