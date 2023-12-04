import React, { useEffect, useState } from "react";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = (event) => {
    setShowMenu(false);
  };
  useEffect(() => {
    const navBar = document.querySelector(".nav-bar");
    if (showMenu === true) navBar.showModal();
    if (showMenu === false) navBar.close();

    navBar.addEventListener("close", () => {
      setShowMenu(false);
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showMenu) {
        setShowMenu(false);
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);
  return (
    <>
      <img
        onClick={openMenu}
        alt="menu icon"
        src="/images/icon-menu.svg"
        className="menu-icon"
      />
      <img alt="logo" src="/images/logo.svg" className="logo-icon" />
      <dialog data-open-menu={showMenu} className="nav-bar">
        <img
          onClick={closeMenu}
          alt="close icon"
          src="/images/icon-close.svg"
          className="close-icon"
        />
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
      </dialog>
    </>
  );
}

export default Menu;
