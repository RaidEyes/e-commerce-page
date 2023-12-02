import React, { useContext, useEffect, useState } from "react";
import CartDetail from "./CartDetail";
import { productContext } from "./App";

function Header() {
  const userContext = useContext(productContext);
  const [openCart, setOpenCart] = useState(false);
  const toggleCart = () => {
    let toggleValue = !openCart;
    setOpenCart(toggleValue);
  };
  const productCount = userContext.productCount;

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
      <div className="cart-icon" onClick={toggleCart}>
        <p className="product-quantity">{productCount}</p>
        <svg width="30" height="28" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <img alt="avatar" src="/images/image-avatar.png" className="avatar" />
      <CartDetail value={openCart} />
    </header>
  );
}

export default Header;
