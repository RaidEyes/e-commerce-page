import React, { createContext, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const productInfo = {
  name: `Fall Limited Edition Sneakers`,
  price: `$125.00`,
  url: `/images/image-product-1-thumbnail.jpg`,
};

const productContext = createContext();

function App() {
  const [itemCount, setItemCount] = useState(0);

  const increaseNumber = () => {
    let prev = itemCount;
    setItemCount(prev + 1);
  };

  const decreaseNumber = () => {
    if (itemCount === 0) return;
    let prev = itemCount;
    setItemCount(prev - 1);
  };

  const [cartDetail, setCartDetail] = useState({});

  const addToCart = () => {
    const newItem = {
      name: productInfo.name,
      quantity: itemCount,
      thumbnail: productInfo.url,
      price: productInfo.price,
    };
    setItemCount(0);
    return newItem;
  };

  return (
    <productContext.Provider
      value={{
        productInfo,
        increaseNumber,
        decreaseNumber,
        itemCount,
        addToCart,
        cartDetail,
      }}
    >
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
