import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';

const Products = () => {
  const history = useHistory();
  const allProduct = useSelector(state => state.products.value);
  const [products, setProducts] = useState([]);
  const pages = Array.from({length: Math.ceil(allProduct.length/12)}, (v, k) => k+1);
  const [page, setPage] = useState(1);
  const [form, setForm] = useState();
  const [checkPagination, setPagination] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setProducts(allProduct.slice((page-1)*12, page*12));
  }, [page]);
 
  function handleChangePage(number) {
    if(number >= pages[0] && number <= pages[pages.length-1]) {
      setPage(number);
    }
  }

  const handleAddProduct = (e, pr) => {
    e.preventDefault();
    const user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : '';
    if(user) {
      dispatch(addToCart(pr));
    } else {
      history.push('/auth/login');
    }
  }

  const handleChange = (e) => {
    setForm(e.target.value);
  }

  const handleSearch = (e) => {
    if(form) {
      e.preventDefault();
      const searchList = allProduct.filter(x => x.name.toLowerCase().includes(form.toLowerCase()));
      setProducts(searchList);
      setForm('');
      setPagination(false);
    }
  }

  return(
    <section className="section-product">
      <div className="container">
        <div className="flex-center-between mt-40">
          <span className="f-bold fs-24">List Product</span>
          <form className="form-search">
            <input className="inp-search" type="text" placeholder="Type to search" onChange={handleChange} value={form||''}></input>
            <button className="btn-search" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <ul className="product-list">
          {
            products.map(e => (
              <li className="product-item col-3" key={e.id}>
                <div className="product-wrap">
                  <Link to={`/product/${e.id}`} className="product-image">
                    <img src={e.image}/>
                  {/* </Link> */}
                  <div className="product-card">
                    <h4 className="product-name">{e.name}</h4>
                    <p className="product-origin">{e.origin}</p>
                    <p className="product-price">{e.price}$</p>
                    <button onClick={(event)=>handleAddProduct(event, e)} className="btn btn-primary btn-add mt-24">Add to cart <i className="fas fa-cart-plus"></i></button>
                  </div>
                  </Link>
                </div>
              </li>
              )
            )
          }
        </ul>
        {checkPagination?
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
        :''
        }
        </div>
    </section>
  );
}
export default Products;
