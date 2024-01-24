import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <img className="notfound-img mx-auto" src={notfound} alt="" />
      <Link to="/">
        <button className="btn green-button">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
