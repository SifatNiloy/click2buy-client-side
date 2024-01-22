import React from "react";
import notfound from "../../assets/404.png";

import { Link } from "react-router-dom";
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
