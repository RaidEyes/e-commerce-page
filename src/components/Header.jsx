import React from "react";

function Header() {
  return (
    <header id="header">
      <img alt="menu icon" src="/images/icon-menu.svg" className="menu-icon" />
      <img alt="logo" src="/images/logo.svg" className="logo-icon" />
      <nav className="nav-bar">
        <img alt="close icon" src="/images/icon-close.svg" />
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>

          <li>
            <a href="#">Men</a>
          </li>

          <li>
            <a href="#">Women</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <img alt="cart icon" src="/images/icon-cart.svg" className="cart-icon" />
      <img alt="avatar" src="/images/image-avatar.png" className="avatar" />
    </header>
  );
}

export default Header;
