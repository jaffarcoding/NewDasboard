import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import "./HomeRes.scss";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import photo from "../images/pass.webp";
import { MdLogout } from "react-icons/md";
const Home = ({ emails }) => {
  // <--------------------------------- this is sideHeader --------------------------------->
  console.log(emails);
  const [click, setClick] = useState(false);
  return (
    <>
      <div className={!click ? "sidebar" : "mobilebar"}>
        <div className="top-sidebar">
          <h3>Company Name</h3>
          <FontAwesomeIcon
            icon="fa-thin fa-magnifying-glass"
            className="search-icon"
          />
          <input type="text" placeholder="Search modules" />
          <AiOutlineSearch className="header-search" />
        </div>
        <div className="top-sidebar-2">
          <h4>CLIENT MASTER</h4>
          <div className="clients">
            <Link to={"/client"}>View Clients</Link>
            <Link to={"/add"}>Add Clients</Link>
          </div>
        </div>
        <div className="login-logoutbtn">
          <img src={photo} alt="" />
          <span>James Burton</span>
          <p>iames@thevouch.digital</p>
          <MdLogout className="logout-s" />
          <div className="online"></div>
        </div>
      </div>
      <button className="btns" onClick={() => setClick(!click)}>
        {!click ? (
          <FaBars className="bar" />
        ) : (
          <AiOutlineCloseCircle className="bar" />
        )}
      </button>
    </>
  );
};

export default Home;
