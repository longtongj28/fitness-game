import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hiking2.jpg";
import "../css/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to FitZone. </h1>
        <p> Start your fitness adventure here.</p>
        <Link to="/discover">
          <button> DISCOVER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;