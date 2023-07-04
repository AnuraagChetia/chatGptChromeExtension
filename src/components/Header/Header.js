import React from "react";
import "./Header.css";
import pfp from "../../assets/pfp.avif";
const Header = () => {
  return (
    <div className="headDiv">
      <div className="content">
        <img className="pfp" src={pfp}></img>
        Grogu
      </div>
    </div>
  );
};

export default Header;
