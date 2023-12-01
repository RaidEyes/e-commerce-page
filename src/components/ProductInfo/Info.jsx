import React, { useContext, useState } from "react";
import { productContext } from "../App";

function Info() {
  const userContext = useContext(productContext);

  const increaseNumber = userContext.increaseNumber;
  const decreaseNumber = userContext.decreaseNumber;
  const itemCount = userContext.itemCount;
  const { name, price, url } = userContext.productInfo;

  return (
    <>
      <h3 className="info-sub-heading">SNEAKER COMPANY</h3>
      <h1 className="info-heading">{name}</h1>
      <p className="info-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <p className="current-price">${Number.parseFloat(price).toFixed(2)}</p>
        <p className="discount-price">50%</p>
        <p className="old-price">$250.00</p>
      </div>
      <div className="function-btn">
        <div className="quantity">
          <img
            style={{ cursor: `pointer` }}
            src="/images/icon-minus.svg"
            alt="minus icon"
            onClick={decreaseNumber}
          />
          <p className="numver-display">{itemCount}</p>
          <img
            style={{ cursor: `pointer` }}
            src="/images/icon-plus.svg"
            alt="add icon"
            onClick={increaseNumber}
          />
        </div>
      </div>
    </>
  );
}

export { Info };
