import React from 'react';
import Spinner from '../Spinner/Spinner';
import { IProduct } from './IProduct';
import { Link } from 'react-router-dom';
import './ProductCards.css';

const ProductCards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="r">
      {products.length ? (
        products.map((product) => (
          <div className="c" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt=""
                style={{ height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </h5>
                <p className="card-text">
                  <span style={{ fontWeight: 'bold' }}>Description: </span>{' '}
                  {product.description}
                </p>
              </div>
              <div className="card-footer">
                <p className="card-text" style={{ textAlign: 'left' }}>
                  <span style={{ fontWeight: 'bold' }}>Category:</span>{' '}
                  <Link to={`/products/category/${product.category}`}>
                    {product.category}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ProductCards;
