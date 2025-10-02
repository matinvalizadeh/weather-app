import { Link } from "react-router-dom";
import "./BottomNavBar.css";

// images
import wave from "../../assets/img/wave.png";
import HomeIcon from "../../assets/img/icons/Home.svg";
import SearchIcon from "../../assets/img/icons/Search.svg";

export default function BottomNavBar() {
  return (
    <div className="mobile-navbar-wrapper">
      <div className="fixed-shape">
        <img src={wave} alt="wave shape" />
      </div>

      <div className="navbar-container">

        <div className="nav-item">
          <img src={SearchIcon} alt="Search Icon" />
          <Link to="/search">جست و جو</Link>
        </div>

        <div className="nav-item">
          <img src={HomeIcon} alt="Home Icon" />
          <Link to="/">صفحه اصلی</Link>
        </div>
      </div>
    </div>
  )
}
