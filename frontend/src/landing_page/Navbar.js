import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="bar">
      <div className="logo">
        <h1>AAA
        </h1>
      </div>
      <div className="other">
        <ul>
          <li>
            <a className="text-muted" href="" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="17"
                fill="currentColor"
                className="bi bi-file-earmark-person-fill"
                viewBox="4 0 1 16"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
              </svg>
              Corporate
            </a>
          </li>
          <li >
            <a className="text-muted" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="18"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              Search
            </a>
          </li>
          <li>
            <a className="text-muted" href="">Offer</a>
          </li>
          <li>
            <a className="text-muted" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                fill="currentColor"
                className="bi bi-person-raised-hand"
                viewBox="0 0 16 16"
              >
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              Help
            </a>
          </li>
          <li>
  <Link to="/register" className="text-muted">Register</Link>
</li>

          <li>
            <Link to="/sign-in" className="text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              Sign in
            </Link>
          </li>
          <li>
            <a className="text-muted" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="18"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
