import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        
        </button>
      </div>
      <div className="Navbar">
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/MCL"> MCL </Link>
        <Link to="/WCA"> WCA </Link>
        <Link to="/MCA"> MCA </Link>
        
      </div>
      </div>
      <form class="d-flex" role="search" style={{marginLeft:"1000px"}}>
        <input class="form-control me-20" type="search" placeholder="Search" aria-label="Search"/>
       
      </form>
    </div>
  );
}

export default Navbar;