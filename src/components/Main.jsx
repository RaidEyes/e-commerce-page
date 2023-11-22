import React from "react";
import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo";
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
