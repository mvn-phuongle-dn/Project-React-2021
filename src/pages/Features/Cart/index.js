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
  const sum = productCart.reduce((sum, { price, amount }) => sum + price * amount, 0)
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
    <section className="section-new-product">
    <div className="container">
      <div className="section-wrap txt-center">
        <h3 className="section-title">Your Cart</h3>
        {productCart.length === 0 &&
        <p className="mt-24">Nothing in your cart <Link to="/products" className="link-style">Get some</Link></p>}
        {productCart.length!=0 &&
        <div className="txt-center">
          <p className="mt-24"><span className="link-style">{productCart.length}</span> product in your cart</p>
          <table className="tb-product w-100 mt-24">
            <thead className="thead">
              <tr>
                <th className="th-index"></th>
                <th className="col-2">Image</th>
                <th className="col-3">Name</th>
                <th>Origin</th>
                <th className="th-quantity">Quantity</th>
                <th className="th-price">Price</th>
                <th className="th-w15"></th>
              </tr>
            </thead>
            <tbody>
              {productCart.map((e, index) => (
                <tr key={index}>
                  <td className="td-product-tt">{index + 1}</td>
                  <td className="col-2">
                    <img className="td-product-img" src={e.image} />
                  </td>
                  <td className="">{e.name}</td>
                  <td className="">{e.origin}</td>
                  <td className="td-quantity td-bold">
                    <div>
                      <i className={`fas fa-minus-circle ${e.amount === 1 ? 'disable' : ''}`} onClick={(event) => handleDecrease(event, e.id)}></i>
                      {e.amount}
                      <i className={`fas fa-plus-circle ${e.amount === e.quantity ? 'disable' : ''}`} onClick={(event) => handleIncrease(event, e.id)}></i>
                    </div>
                  </td>
                  <td className="td-bold">{parseFloat(e.price)*parseInt(e.amount)}</td>
                  <td className="td-action">
                    <div>
                      <i className="fas fa-trash-alt" onClick={(event) => handleDelete(event, e.id)}></i>
                      <button
                        className="btn btn-primary btn-buy"
                        onClick={(event) => handleDelete(event, e.id)}
                      >
                        Buy
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-24">
            <span className="f-bold">${sum}</span>
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
