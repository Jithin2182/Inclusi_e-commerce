import React from "react";
import FlashCard from "../components/flashDeals/FlashCard";
import ShopCart from "../components/shops/ShopCart";

const Products = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <div>
      <div className="container">
        <FlashCard productItems={productItems} addToCart={addToCart} />
        <div className='product-content  grid1'>
        <ShopCart addToCart={addToCart} shopItems={shopItems} />
        </div>
      </div>
    </div>
  );
};

export default Products;
