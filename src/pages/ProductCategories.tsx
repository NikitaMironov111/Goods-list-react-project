import React, { useState, useEffect } from 'react';
import { IProduct } from '../components/Products/IProduct';
import { useParams } from 'react-router-dom';
import http from '../components/http';
import ProductCards from '../components/Products/ProductCards';
import Search from '../components/Search';
import { useSearch } from '../hooks/useSearch';

const ProductCategories = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');
  const getProduct = async () => {
    try {
      const products = await http.get(`products/category/${category}`);
      setProducts(products.data.products);
      console.log(products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const searchedProducts = useSearch(products, 'title', search);
  return (
    <div>
      <Search field={'Enter Product Title'} setSearch={setSearch}></Search>
      <ProductCards products={searchedProducts}></ProductCards>
    </div>
  );
};

export default ProductCategories;
