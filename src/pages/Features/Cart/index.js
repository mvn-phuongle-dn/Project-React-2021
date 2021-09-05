import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity } from '../../../store/cartSlice';
import { decreaseQuantity } from '../../../store/cartSlice';
import { deleteProduct } from '../../../store/cartSlice';
import { deleteAll } from '../../../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  let productCart = useSelector(state => state.cart.value);
  const sum = productCart.reduce((sum, { amount }) => sum + amount, 0);
  const total = productCart.reduce((total, { price, amount }) => total + price * amount, 0);
  let handleIncrease = (e, id) => {
    e.preventDefault();
    dispatch(increaseQuantity(id));
  }
  let handleDecrease = (e, id) => {
    e.preventDefault();
    dispatch(decreaseQuantity(id));
  }
  let handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  }
  let handleBuyAll = (e) => {
    e.preventDefault();
    dispatch(deleteAll());
  }
  return(
    <section className="section">
      <div className="container">
        <div className="section-wrap txt-center">
          <h3 className="section-title">Your Cart</h3>
          {productCart.length === 0 &&
          <p className="mt-24">Nothing in your cart <Link to="/products" className="link-style">Get some</Link></p>}
          {productCart.length !== 0 &&
          <div className="txt-center">
            <p className="mt-24"><span className="link-style f-bold mr-5">{sum}</span> product in your cart</p>
            <table className="tb-product w-100 mt-24">
              <thead className="thead">
                <tr>
                  <th className="th-index"></th>
                  <th className="col-2">Image</th>
                  <th className="col-3">Name</th>
                  <th>Origin</th>
                  <th className="th-quantity">Quantity</th>
                  <th className="th-price">Price</th>
                  <th className="th-w100"></th>
                  <th className="th-w100"></th>
                </tr>
              </thead>
              <tbody>
                {productCart.map((e, index) => (
                  <tr key={index}>
                    <td className="td-product-tt">{index + 1}</td>
                    <td className="col-2">
                      <img className="td-product-img" src={e.image} alt="img-product"/>
                    </td>
                    <td className="">{e.name}</td>
                    <td className="">{e.origin}</td>
                    <td className="td-quantity td-bold">
                      <div>
                        <i className={`fal fa-minus-circle mr-10 ${e.amount === 1 ? 'disable' : ''}`} onClick={(event) => handleDecrease(event, e.id)}></i>
                        {e.amount}
                        <i className={`fal fa-plus-circle ml-10 ${e.amount === e.quantity ? 'disable' : ''}`} onClick={(event) => handleIncrease(event, e.id)}></i>
                      </div>
                    </td>
                    <td className="td-bold span-high-light">${parseFloat(e.price)*parseInt(e.amount)}</td>
                    <td className="td-action">
                      <div>
                        <i className="fab fa-amazon-pay" onClick={(event) => handleDelete(event, e.id)}></i>
                      </div>
                    </td>
                    <td className="td-action">
                      <i className="fal fa-times-circle" onClick={(event) => handleDelete(event, e.id)}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-24">
              <p className="mb-24">Total: <span className="span-high-light f-bold ml-10">${total}</span></p>
              <span className="f-bold mr-10">Payment on delivery</span>
              <button className="btn btn-primary fs-16 ml-10" onClick={(event) => handleBuyAll(event)}>
                Buy All
              </button>
            </div>
          </div>
          }
        </div>
      </div>
    </section >
  );
}
export default Cart;
