import { Link } from "react-router-dom";
import "./BottomNavBar.css";

// images
import wave from "../../assets/img/wave.png";
import HomeIcon from "../../assets/img/icons/Home.svg";
import SearchIcon from "../../assets/img/icons/Search.svg";
import InfoIcon from "../../assets/img/icons/Info.svg";

export default function BottomNavBar() {
  return (
    <div className="mobile-navbar-wrapper">
      <div className="fixed-shape">
        <img src={wave} alt="wave shape" />
      </div>

      <div className="navbar-container">
        <div className="nav-item">
          <img src={InfoIcon} alt="Info Icon" />
          <Link to="/weatherapp/contact-us">تماس با ما</Link>
        </div>

        <div className="nav-item">
          <img src={SearchIcon} alt="Search Icon" />
          <Link to="/weatherapp/search">جست و جو</Link>
        </div>

        <div className="nav-item">
          <img src={HomeIcon} alt="Home Icon" />
          <Link to="/weatherapp">صفحه اصلی</Link>
        </div>
      </div>
    </div>
  )
}
