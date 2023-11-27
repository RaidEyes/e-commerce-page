import React from "react";
import Carousel from "./Carousel";
import ProductInfo from "./ProductInfo/ProductInfo";
import Dialog from "./Dialog";

const productInfo = {
  name: `Fall Limited Edition Sneakers`,
  price: `$125.00`,
  url: `/images/image-product-1-thumbnail.jpg`,
};

function Main() {
  return (
    <main id="main">
      <Dialog />
      <Carousel />
      <ProductInfo product={productInfo} />
    </main>
  );
}

export default Main;
