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
                  <a className="text-muted" href="text">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
                    
                    J.D Corporate
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
              
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
                
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
                  <a className="text-muted" href="text">
                    Help & Support
                  </a>
                </li>

                <li>
                  <a className="text-muted" href="text">
                    Partner with us
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
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
                  <a className="text-muted" href="text">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
                    {" "}
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
                    {" "}
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="text">
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
