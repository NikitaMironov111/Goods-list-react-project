import React, { useContext, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { IProduct } from './IProduct';
import { Link } from 'react-router-dom';
import './SingleProductCard.css';
import Context from '../../context/context';
import ModalImg from '../ModalImg';

const SingleProductCard = ({ products }: { products: IProduct[] }) => {
  const { openModalImg, setOpenModalImg } = useContext(Context);
  const [imgUrl, setImgUrl] = useState('');
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center mt-3 mb-3">
      {products.length ? (
        products.map((product) => (
          <div className="col" key={product.id} style={{ width: '600px' }}>
            <div className="card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt=""
                style={{ height: '300px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ textAlign: 'left' }}>
                  <span style={{ fontWeight: 'bold' }}>Description: </span>{' '}
                  {product.description}
                </p>
                <p className="card-text" style={{ textAlign: 'left' }}>
                  <span style={{ fontWeight: 'bold' }}>Price:</span>{' '}
                  {product.price}$
                </p>
                <p className="card-text" style={{ textAlign: 'left' }}>
                  <span style={{ fontWeight: 'bold' }}>Rating:</span>{' '}
                  {product.rating}
                </p>
                <div className="card-img-container">
                  {product.images.length ? (
                    product.images.map((img) => (
                      <div
                      // onClick={() => {
                      //   setOpenModalImg(true);
                      //   setImgUrl(`${img}`);
                      //   console.log(imgUrl);
                      // }}
                      >
                        <img
                          src={img}
                          alt=""
                          style={{ width: '100%' }}
                          onClick={() => {
                            setOpenModalImg(true);
                            setImgUrl(img.toString());
                            console.log(imgUrl);
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <div></div>
                  )}
                </div>
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
      <ModalImg imgUrl={imgUrl}></ModalImg>
    </div>
  );
};
export default SingleProductCard;
