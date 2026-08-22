import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/404.png";
import "./NotFound.css";
const NotFound = () => {
  return (
    <main className="notfound-page">
      <div className="notfound-copy"><p className="eyebrow">Page not found</p><h1>Looks like this page wandered off.</h1><p>We could not find the page you were looking for. The good news is there is plenty more to browse.</p><Link to="/" className="notfound-button">Back to homepage <span>→</span></Link></div>
      <img className="notfound-img" src={notfound} alt="" />
      <div className="notfound-number">404</div>
    </main>
  );
};

export default NotFound;
