import React from "react";
import FlashCard from "../components/flashDeals/FlashCard";
import ShopCart from "../components/shops/ShopCart";
import Layout from "../common/Layout";

const Products = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <Layout>
      <div className="container">
        <FlashCard productItems={productItems} addToCart={addToCart} />
        <div className='product-content  grid1'>
        <ShopCart addToCart={addToCart} shopItems={shopItems} />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
