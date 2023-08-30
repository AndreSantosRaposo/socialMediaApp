import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderMobile() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
    console.log(isMobileMenuActive)
  };
  const hamburgerClass = isMobileMenuActive ? "hamburger active" : "hamburger";
  const navClass = isMobileMenuActive ? "navbar active" : "navbar";

  const activeStyle = {
    backgroundColor: "#E5B906",
  };

  return (
    <header className="headerMobile">
          <div className="headerMobile__container">
            <div className="headerMobile__logo">
              <img src="/imgs/logo.png"></img>
              <h1>Logo</h1>
            </div>
            <div className="headerMobile__toggle" onClick={toggleMobileMenu}>
              <div class={hamburgerClass}>
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
              </div>
            </div>
          </div>
          <nav className={navClass}>
            <ul className="navbar__list">
              <NavLink
                to="/"
                style={({isActive}) => isActive ? activeStyle : null }
                className="header__nav__link"
              >Home
              </NavLink>
              <NavLink
                to="profile"
                style={({isActive}) => isActive ? activeStyle : null }
                className="header__nav__link"
              >Profile
              </NavLink>
              <NavLink
                to="contacts"
                style={({isActive}) => isActive ? activeStyle : null }
                className="header__nav__link"
              >Contacts
              </NavLink>
              <NavLink
                to="notes"
                style={({isActive}) => isActive ? activeStyle : null }
                className="header__nav__link"
              >Notes
              </NavLink>
              <NavLink
                to="search"
                style={({isActive}) => isActive ? activeStyle : null }
                className="header__nav__link"
              >Search
              </NavLink>
              <NavLink
                to="settings"
                style={({isActive}) => isActive ? activeStyle : null }
                className="header__nav__link"
              >Settings
              </NavLink>
            </ul>
          </nav>
    </header>
  );
}