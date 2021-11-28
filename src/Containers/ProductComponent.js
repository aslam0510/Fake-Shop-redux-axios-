import React from 'react';
import { useSelector } from 'react-redux';
import { Link , useParams} from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  
  return (
    <>
      {products.length > 0 ? products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="margin">
          <div className="ui link card" >
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta price">${product.price}</div>
              <div className="meta">{product.category}</div>
            </div>
          </div>
          </div>
          </Link>
        );
      }) : <h3>Loading....</h3>}
    </>
  );
};

export default ProductComponent;
