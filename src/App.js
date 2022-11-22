import React, { useState } from 'react';
import data from "./components/back/data/Data";
import Header from './components/front/Header/Header';
import {BrowserRouter as Router} from "react-router-dom";
import Rout from './components/front/Rout/Routes1';
import Routes1 from './components/front/Rout/Routes1';
const App = () => {

  const {productItems}=data;
  const [cartItems, setCartitems]=useState([]);

  const handleAddProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist){
      setCartitems(cartItems.map((item)=>item.id===product.id?
      {...ProductExist, quantity: ProductExist.quantity+1}:item));
    }
    else{
      setCartitems([...cartItems,{...product,quantity:1}]);
    }
  }

  const handleRemoveProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist.quantity===1){
    setCartitems(cartItems.filter((item)=>item.id!==product.id));
    }
    else{
      setCartitems(
        cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item)
      )
    }
  }
  const handleCartClearance=()=>{
    setCartitems([]);
  }
  return (
    <div>
    <Router>
      <Header cartItems={cartItems}/>
      <Routes1 
      productItems={productItems} 
      cartItems={cartItems} 
      handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
      />
    </Router>
    </div>
  )
}

export default App
