import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../App";

function CartDetail(props) {
  const userContext = useContext(productContext);

  const deleteItem = userContext.deleteItem;

  const closeModal = () => {
    const cartBox = document.querySelector(".cart-detail");
    cartBox.close();
  };
  if (!userContext.cartDetail)
    return (
      <dialog className="cart-detail" data-check={props.value}>
        <div className="cart-heading">
          <h3 className="cart-name">Cart</h3>
          <img
            onClick={closeModal}
            style={{ width: "20px", height: "20px" }}
            src="/images/icon-close.svg"
            alt="close icon"
          />
        </div>
        <div className="product-detail">
          <p>Your cart is empty</p>
        </div>
      </dialog>
    );
  if (userContext.cartDetail) {
    const { name, price, quantity, thumbnail, total } = userContext.cartDetail;
    return (
      <dialog className="cart-detail" data-check={props.value}>
        <div className="cart-heading">
          <h3 className="cart-name">Cart</h3>
          <img
            onClick={closeModal}
            style={{ width: "20px", height: "20px" }}
            src="/images/icon-close.svg"
            alt="close icon"
          />
        </div>
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
              src="/images/icon-delete.svg"
              alt="delete icon"
            />
          </div>
          <button className="btn btn-add">Checkout</button>
        </div>
      </dialog>
    );
  }
}

export default CartDetail;
