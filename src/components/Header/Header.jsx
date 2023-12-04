import React, { useContext, useEffect, useState } from "react";
import CartDetail from "./CartDetail";
import { productContext } from "../App";
import Menu from "./Menu";
import NavBar from "./NavBar";

function Header() {
  const userContext = useContext(productContext);

  const [openCart, setOpenCart] = useState(false);
  const toggleCart = () => {
    let toggleValue = !openCart;
    setOpenCart(toggleValue);
    const cartBox = document.querySelector(".cart-detail");
    cartBox.showModal();
  };

  useEffect(() => {
    const cartBox = document.querySelector(".cart-detail");

    cartBox.addEventListener("close", () => {
      setOpenCart(false);
    });
  }, [openCart]);

  const productCount = userContext.productCount;

  return (
    <header id="header">
      <Menu />
      <NavBar toggleCart={toggleCart} productCount={productCount} />
      <CartDetail value={openCart} />
    </header>
  );
}

export default Header;
