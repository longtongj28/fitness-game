import React, { useState } from "react";
import Logo from "./assets/fitzonelogo.png"
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./css/navbar.css"

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        
        <img src={Logo} />

        
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/discover"> Discover </Link>
          <Link to="/zone"> Your Zone </Link>
          <Link to="/ranks"> Ranks </Link>
          <Link to="/rewards"> Rewards </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/discover"> Discover </Link>
        <Link to="/zone"> Your Zone </Link>
        <Link to="/ranks"> Ranks </Link>
        <Link to="/rewards"> Rewards </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

