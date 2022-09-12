import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import Product from '../pages/Product';
import PersonalCabinet from '../pages/PersonalCabinet';
import Context from '../context/context';
import ProductCategories from '../pages/ProductCategories';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path="*" element={<Products></Products>}></Route>
      <Route path="products/:id" element={<Product></Product>}></Route>
      <Route
        path="products/category/:category"
        element={<ProductCategories></ProductCategories>}
      ></Route>
      <Route
        path="personalcabinet"
        element={<PersonalCabinet></PersonalCabinet>}
      ></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="products" element={<Products></Products>}></Route>
      <Route path="products/:id" element={<Product></Product>}></Route>
      <Route
        path="products/category/:category"
        element={<ProductCategories></ProductCategories>}
      ></Route>
      <Route path="*" element={<Products></Products>}></Route>
    </Routes>
  );
};

export default AppRoutes;
