import React from "react";
import { Link } from "react-router-dom";
import errorlogo from "../../images/errbg.png";
import "./404.css";

// This part is contributed by Tasfi

const FourOFour = () => {
  return (
    <div>
      <div>
        <div className=" main-div mb-5">
          <div className="error">
            <p className="p">4</p>
            <span className="dracula">
              <div className="con">
                <div className="hair"></div>
                <div className="hair-r"></div>
                <div className="head"></div>
                <div className="eye"></div>
                <div className="eye eye-r"></div>
                <div className="mouth"></div>
                <div className="blod"></div>
                <div className="blod blod2"></div>
              </div>
            </span>
            <p className="p">4</p>

            <div className="page-ms">
              <img className="errbg" src={errorlogo} alt="" />
              <p className="page-msg"> Oops, You're lost!</p>
              <button className="go-back">
                <Link className="btn" to="/">
                  Go Back
                </Link>
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourOFour;
