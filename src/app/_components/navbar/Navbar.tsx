import React from "react";
import "./Navbar.css";
import Link from "next/link";
import logo_dark from "../../assets/logo-white.png";
import logo_light from "../../assets/logo-black.png";
import search_icon_dark from "../../assets/search-b.png";
import search_icon_light from "../../assets/search-w.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";

type NavbarProps = {
  sesja: string;
};

const Navbar: React.FC<NavbarProps> = ({ sesja }) => {
  return (
    <div className="navbar">
      <img
      //src={theme === "light" ? logo_light : logo_dark}
      //alt=""
      //className="logo"
      />
      <ul className="navbar-items">
        <li>
          <Link href="/Home" className="no-underline navbar-item">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Arkusze" className="no-underline navbar-item">
            Arkusze
          </Link>
        </li>
        <li className="navbar-item">Zadania</li>
        <li>
          <Link href="/Materialy" className="no-underline navbar-item">
            Materiały
          </Link>
        </li>
        <li>
          <Link href="/About" className="no-underline navbar-item">
            About
          </Link>
        </li>
      </ul>
      <div className="search-box">
        <input id="searching" type="text" placeholder="Search" />
        <img
        //src={search_icon_dark} alt=""
        />
      </div>
      <img
      //onCanPlay={() => {
      // toggle_mode();
      //}}
      //src={theme === "light" ? toggle_light : toggle_dark}
      //alt=""
      //className="toggle-icon"
      //onClick={toggle_mode}
      />
      <Link
        href={{ sesja } ? "/api/auth/signout" : "/api/auth/signin"}
        className="sign-button"
      >
        {{ sesja } ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
};

export default Navbar;
