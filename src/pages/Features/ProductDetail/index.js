import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { useHistory } from "react-router-dom";

const ProductDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  const products = useSelector(state => state.products.value);
  const product = products.find(x => x.id === parseInt(id));

  const handleAddProduct = (e, pr) => {
    e.preventDefault();
    const user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : '';
    if(user) {
      dispatch(addToCart(pr));
    } else {
      history.push('/auth/login');
    }
  }
  return(
    <section className="section-product-detail">
      <div className="container">
        <div className="product-detail-wrap">
          <div className="product-card">
            <img className="product-image" src={product.image} alt="img-product"/>
            <div className="txt-left">
              <h3 className="product-name">{product.name}</h3>
              <h4 className="product-brand">{product.origin}</h4>
              <h2 className="product-price">Price: <span className="span-highlight">${product.price}</span></h2>
              <button className="btn btn-primary btn-add" onClick={(event)=>handleAddProduct(event, product)}>Add to cart</button>
            </div>
          </div>
          <div className="product-wrap-content">
            <div className="text-group">
              <label className="title">Detail:</label>
              <span className="value"><i className="fa fa-info-circle span-highlight"></i></span>
            </div>
            <div className="text-group">
              <label className="title">Origin:</label>
              <span className="value">{product.origin}</span>
            </div>
            <div className="text-group">
              <label className="title">Quantity:</label>
              <span className="value">{product.quantity}</span>
            </div>
            <div className="text-group">
              <label className="title">Description:</label>
              <span className="value">{product.des}</span>
            </div>
          </div>
          {/* <div className="product-card">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
