import React, { createContext } from "react";
import Carousel from "./Carousel/Carousel";
import ProductInfo from "./ProductInfo/ProductInfo";
import Dialog from "./Dialog";

function Main() {
  return (
    <main id="main">
      <Dialog />
      <Carousel />
      <ProductInfo />
    </main>
  );
}

export default Main;
