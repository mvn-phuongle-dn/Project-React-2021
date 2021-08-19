import React, { useState, useEffect } from 'react';
import product1 from '../../../assets/images/product1.jpg';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice'

const Products = () => {
  const [products, setProducts] = useState([]);
  const pages = [1, 2, 3];
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://reqres.in/api/products?page=${page}`).then(e => e.json())
    .then(
      e => {
        setProducts(e.data)
      }
    )
  }, [page]);
  function handleChangePage(number) {
    if(number >= pages[0] && number <= pages[pages.length-1]) {
      setPage(number);
    }
  }

  const handleAddProduct = (e, id) => {
    e.preventDefault();
    dispatch(addToCart(id));
  }

  return(
    <section className="section-product">
      <div className="container">
        <h2 className="section-title">List Product</h2>
        <ul className="product-list">
          {
            products.map(e => (
              <li className="product-item col-4" key={e.id}>
                <div className="product-wrap">
                  <Link to={`/product/${e.id}`} className="product-image">
                    <img src={product1}/>
                  </Link>
                  <div className="product-card">
                    <h4 className="product-name">{e.name}</h4>
                    <p className="product-origin">{e.origin}</p>
                    <p className="product-price">{e.price}$</p>
                    <button onClick={(event)=>handleAddProduct(event, e.id)} className="btn btn-primary btn-add mt-24">Add to cart <i className="fas fa-cart-plus"></i></button>
                  </div>
                </div>
              </li>
              )
            )
          }
        </ul>
        <ul className="pagination mb-40">
            <li className="page-item" onClick={() => handleChangePage(pages[0])}>
              <span className={page === pages[0] ? "page-link txt-gray":"page-link pointer"}>
                <i className="fad fa-chevron-double-left"></i>
              </span>
            </li>
            <li className="page-item" onClick={() => handleChangePage(page-1)}>
              <span className={page === pages[0] ? "page-link txt-gray" : "page-link pointer"}>
                <i className="fas fa-chevron-left"></i>
              </span>
            </li>
            {
              pages.map(item =>
                <li className="page-item pointer" onClick={() => handleChangePage(item)} key={item}>
                  <span className={ page === item ? "page-link link-text active" : "page-link link-text"}>{ item }</span>
                </li>
              )
            }
            <li className="page-item" onClick={() => handleChangePage(page+1)}>
              <span className={page === pages[pages.length-1] ? "page-link txt-gray":"page-link pointer"}>
                <i className="fas fa-chevron-right"></i>
              </span>
            </li>
            <li className="page-item" onClick={() => handleChangePage(pages[pages.length-1])}>
              <span className={page === pages[pages.length-1] ? "page-link txt-gray":"page-link pointer"}>
                <i className="fad fa-chevron-double-right"></i>
              </span>
            </li>
          </ul>
      </div>
    </section>
  );
}
export default Products;
