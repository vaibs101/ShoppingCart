import React from 'react';
import {Route, Routes} from "react-router-dom";
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
const Routes1=({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance})=>{
   
  return(
  <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}>
          
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}></Route>
      </Routes>
    </div>
  );
}

export default Routes1;
