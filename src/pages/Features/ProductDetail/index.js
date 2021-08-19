import React from 'react';
import logo from '../../../assets/images/product1.jpg';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {id} = useParams();

  return(
    <section className="section-product-detail">
      <div className="container">
        <div className="product-detail-wrap">
          <h3 className="product-name">Product 1</h3>
          <div className="product-card">
            <img className="product-image" src={logo}/>
            <div>
              <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna</p>
              <p className="product-price">5.00$</p>
              <button className="btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;
