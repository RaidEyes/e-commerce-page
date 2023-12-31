import React, { createContext, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main";

const productInfo = {
  name: `Fall Limited Edition Sneakers`,
  price: 125,
  url: `/images/image-product-1-thumbnail.jpg`,
};

const productContext = createContext();

function App() {
  const [dialog, setDialog] = useState(false);
  const toggleDialog = () => {
    const prev = dialog;
    setDialog(!prev);
  };
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

  const [cartDetail, setCartDetail] = useState(null);

  const [productCount, setProductCount] = useState(0);

  const deleteItem = () => {
    setCartDetail(null);
    setProductCount(0);
  };

  const addToCart = () => {
    if (itemCount === 0) return;
    let count = itemCount;
    const newItem = {
      name: productInfo.name,
      quantity: itemCount,
      thumbnail: productInfo.url,
      price: productInfo.price,
      total: itemCount * parseInt(productInfo.price),
    };
    setProductCount(itemCount);
    setCartDetail({ ...newItem });
    setItemCount(0);
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
        productCount,
        deleteItem,
        dialog,
        toggleDialog,
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

///// todo 1: Create desktop design
///// todo 2: create carousel
///// todo 3: create carousel and design dialog
///// todo 4: Add button functions (plus, minus, Add to cart)
///// todo 5: Design the cart (empty + fill)
///// todo 6: design menu for mobile
///// todo 7: Add transition for the menu
//todo 8: create a popover slide when clicking the main image
/////todo 9: add style to each of the clicked thumbnail
