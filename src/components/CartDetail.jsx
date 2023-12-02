import React, { useContext, useEffect, useState } from "react";
import { productContext } from "./App";

function CartDetail(props) {
  const userContext = useContext(productContext);
  useEffect(() => {
    const cartBox = document.querySelector(".cart-detail");
    cartBox.style.display = !props.value ? `none` : `grid`;
  }, [props.value]);
  const deleteItem = userContext.deleteItem;

  if (!userContext.cartDetail)
    return (
      <div className="cart-detail" data-check={props.value}>
        <h3 className="cart-name">Cart</h3>
        <div className="product-detail">
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  if (userContext.cartDetail) {
    const { name, price, quantity, thumbnail, total } = userContext.cartDetail;
    return (
      <div className="cart-detail" data-check={props.value}>
        <h3 className="cart-name">Cart</h3>
        <div className="product-detail">
          <div style={{ marginBottom: "1rem" }} className="item">
            <img
              style={{ maxWidth: "50px", borderRadius: "8px" }}
              src={thumbnail}
              alt="image icon"
            />
            <div>
              <p>{name}</p>
              <p>
                <span>${Number.parseFloat(price).toFixed(2)}</span> x {quantity}{" "}
                <span style={{ fontWeight: "700", color: "black" }}>
                  ${Number.parseFloat(total).toFixed(2)}
                </span>
              </p>
            </div>
            <img
              onClick={deleteItem}
              style={{ maxWidth: "20px" }}
              src="../../public/images/icon-delete.svg"
              alt="delete icon"
            />
          </div>
          <button className="btn btn-add">Checkout</button>
        </div>
      </div>
    );
  }
}

export default CartDetail;
