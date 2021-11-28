import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProductComponent = () => {
  const history = useHistory()
  const products = useSelector((state) => state.allProducts.products);

  const onProduct = (product) =>{
    // e.preventDefault();
    history.push(`/product/${product.id}`)
  }
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div class="ui card" key={product.id} onClick={() => onProduct(product)}>
              <div class="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div class="content">
                <div className="header">{product.title}</div>
                <div className="meta price">${product.price}</div>
                <div className="meta">{product.category}</div>
              </div>
            </div>
          );
        })
      ) : (
        <h3>Loading....</h3>
      )}
    </>
  );
};

export default ProductComponent;
