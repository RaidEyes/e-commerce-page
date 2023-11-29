import React, { createContext, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const productInfo = {
  name: `Fall Limited Edition Sneakers`,
  price: `$125.00`,
  url: `/images/image-product-1-thumbnail.jpg`,
};

const productContext = createContext(productInfo);

function App() {
  return (
    <productContext.Provider value={{ productInfo }}>
      <div>
        <Header />
        <Main />
      </div>
    </productContext.Provider>
  );
}

export { App, productContext };

// todo 1: Create desktop design
// todo 2: create carousel
// todo 3: create carousel and design dialog
///// todo 4: Add button functions (plus, minus, Add to cart)
///// todo 5: Design the cart (empty + fill)
///// todo 6: design menu for mobile
// todo 7: Add transition for the menu
