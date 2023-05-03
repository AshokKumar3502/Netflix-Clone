import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            style={{ width: "100px", height: "40px" }}
            src={logo}
            alt="logo"
          />
        </Link>

        <div>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recent">Recently Added</Link>
          <Link to="/mylist">My List</Link>
        </div>
        <div className="sign_button">
          <Link to="/signin" path="/Signin">
            <button className="sign_in">Sign In</button>
          </Link>
          <Link to="/signup" path="/Signup">
            <button className=" sign_up">Sign Up</button>
          </Link>
        </div>

        <ImSearch />
      </nav>
    </>
  );
};

export default Header;
