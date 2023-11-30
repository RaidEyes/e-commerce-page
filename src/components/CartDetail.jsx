import React, { useContext, useEffect, useState } from "react";
import { productContext } from "./App";

function CartDetail(props) {
  const userContext = useContext(productContext);

  useEffect(() => {
    const cartBox = document.querySelector(".cart-detail");
    cartBox.style.display = !props.value ? `none` : `grid`;
  }, [props.value]);

  return (
    <div className="cart-detail" data-check={props.value}>
      <h3 className="cart-name">Cart</h3>
      <div className="product-detail">
        <p>Your cart is empty</p>
      </div>
    </div>
  );
}

export default CartDetail;
