import React, { createContext, useState } from "react";
import Carousel from "./Carousel/Carousel";
import ProductInfo from "./ProductInfo/ProductInfo";
import Dialog from "./Dialog";

export const dialogContext = createContext();

function Main() {
  const [dialog, setDialog] = useState(false);
  const toggleDialog = () => {
    setDialog((dialog) => !dialog);
  };
  return (
    <dialogContext.Provider value={{ dialog, toggleDialog, setDialog }}>
      <main id="main">
        <Dialog />
        <Carousel />
        <ProductInfo />
      </main>
    </dialogContext.Provider>
  );
}

export default Main;
