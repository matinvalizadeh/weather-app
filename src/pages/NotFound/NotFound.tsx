import React from "react";

// images
import error from "../../assets/img/404.gif";

// styles
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1>ارور 404 صفحه پیدا نشد</h1>
      <img src={error} alt="404 gif" className="notfound-image" />
    </div>
  );
};

export default NotFound;