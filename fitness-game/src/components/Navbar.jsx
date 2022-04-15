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
        

        <Link to="/">
        <img src={Logo} alt="fitzone"/>
        </Link>
        
        <div className="hiddenLinks">
          <Link to="/discover"> Discover </Link>
          <Link to="/zone"> Your Zone </Link>
          <Link to="/ranks"> Ranks </Link>
          <Link to="/rewards"> Rewards </Link>
          <Link to="/login"> Login </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/discover"> Discover </Link>
        <Link to="/zone"> Your Zone </Link>
        <Link to="/ranks"> Ranks </Link>
        <Link to="/rewards"> Rewards </Link>
        <Link to="/login"> Login </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

