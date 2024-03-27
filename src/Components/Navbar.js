import Button from "./Button";
import "./Navbar.css";
// import { Button } from "./Button.js";
import {NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navlogopart">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt=""
            
          />
          <span>GeekFoods</span>
        </div>
        <div className="menu">
          <li><NavLink to='/' className="links">Home</NavLink></li>
          <li><NavLink to='/quotes' className="links">Quote</NavLink></li>
          <li><NavLink to='/restaurants' className="links">Restaurant</NavLink></li>
          <li><NavLink to='/home' className="links">Food</NavLink></li>
          <li><NavLink  to='/contact' className="links">Contact</NavLink></li>
        </div>

        <div>
          <Button
            borderRadius="5px"
            padding="10px"
            fontSize="15px"
            backgroundColor={"#2563EB"}
            fontColor={"#FFFFFF"}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
