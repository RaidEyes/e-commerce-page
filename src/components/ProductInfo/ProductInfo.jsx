import React, { useContext, useState } from "react";
import { Info } from "./Info";
import Button from "./Button";

function ProductInfo() {
  console.log();
  return (
    <div className="product-info">
      <Info />
      <Button />
    </div>
  );
}

export default ProductInfo;
