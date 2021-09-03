import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice'

const ProductDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const products = useSelector(state => state.products.value);
  const product = products.find(x => x.id === parseInt(id));

  const handleAddProduct = (e, id) => {
    e.preventDefault();
    dispatch(addToCart(id));
  }
  return(
    <section className="section-product-detail">
      <div className="container">
        <div className="product-detail-wrap">
          <div className="product-card">
            <img className="product-image" src={product.image} alt="img-product"/>
            <div className="txt-left">
              <h3 className="product-name txt-center">{product.name}</h3>
              <p className="title"><span>Origin:</span>{product.origin}</p>
              <p className="title"><span>Description:</span>{product.des}</p>
              <p className="title"><span>Quantity:</span>{product.quantity}</p>
              <p className="title"><span>Price:</span><span className="product-price mt-0">${product.price}</span></p>
              <div className="txt-center">
                <button className="btn btn-primary" onClick={(event)=>handleAddProduct(event, parseInt(id))}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
