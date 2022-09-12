import React, { useState, useEffect } from 'react';
import { IProduct } from '../components/Products/IProduct';
import { useParams } from 'react-router-dom';
import http from '../components/http';
import SingleProductCard from '../components/Products/SingleProductCard';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct[]>([]);

  const getProduct = async () => {
    try {
      const product = await http.get(`products/${id}`);
      setProduct([product.data]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <SingleProductCard products={product}></SingleProductCard>
    </div>
  );
};

export default Product;
