import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../hooks/useTitle";
import animationRain from "../assets/img/animation-rain.gif";
import "./HomePage.css";

export default function HomePage() {

  useTitle("صفحه اصلی");
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage-container">
      <div
        className="homepage-title"
        data-aos="fade-left"
        data-aos-offset="10"
        data-aos-easing="ease-in-sine"
      >
        <h1>اپلیکیشن آب و هوا</h1>
        <Link to="/projects/weatherapp/search">جست و جو بین شهرها</Link>
      </div>
      <div>
        <img src={animationRain} alt="Weather App photo" />
      </div>
    </div>
  );
}