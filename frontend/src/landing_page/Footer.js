import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="col">
      <div className="container mt-4">
        <div className="row">
          <h1 className="text-center mt-4">
            For better experience,download the J.D app now
          </h1>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <p>&copy;2024 J.D Limited</p>
          </div>
          <div className="col-3">
            <h3 className="mb-3">Company</h3>
            <div>
              <ul>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    J.D Corporate{" "}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    Careers{" "}
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <h3 className="mb-3">Contact us</h3>
            <div>
              <ul>
                <li>
                  {" "}
                  <a className="text-muted" href="">
                    Help & Support
                  </a>
                </li>

                <li>
                  {" "}
                  <a className="text-muted" href="">
                    Partner with us{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-muted" href="">
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <h3 className="mb-3">Legal</h3>
            <div>
              <ul>
                <li>
                  <a className="text-muted" href="">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="">
                    {" "}
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
