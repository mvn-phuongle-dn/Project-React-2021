import React, { useState } from 'react';
import HeroBanner from '../../../components/HeroBanner';
import grape from '../../../assets/images/grape.png';
import cherry from '../../../assets/images/cherry.jpg';
import durian from '../../../assets/images/durian.png';
import fruit from '../../../assets/images/fruit.png';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { addToFav } from '../../../store/favSlice';
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([{id: 1, name: 'American Navel yellow flesh orange', origin: 'America', des: 'American Navel yellow flesh orange', price: '0.5', image: 'http://fruitshop.com.vn/image/cache/data/Sunkist Cara Cara Oranges-178x140.jpg', fav: false, quantity: 3},
  {id: 4, name: 'merican seedless red grapes', origin: 'America', des: 'American seedless red grapes', price: '5', image: 'http://fruitshop.com.vn/image/cache/data/Grapes - red-178x140.JPG', fav: false, quantity: 3},
  {id: 6, name: 'Blueberry USA', origin: 'America', des: 'Blueberry USA - Blueberry USA', price: '20', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false, quantity: 3},
  {id: 10, name: 'Australian Sugar Plums', origin: 'Australia', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/Man_duong_Uc-178x140.jpeg', fav: false, quantity: 3},
  {id: 11, name: 'Australian Spring Peach', origin: 'Australian', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/1243536c-178x140.jpg', fav: false, quantity: 3},
  {id: 15, name: 'Korean yellow melon', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/GF-1317052114-0953_m0-178x140.jpg', fav: false, quantity: 3},
  {id: 16, name: 'Korean fresh crispy persimmon', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/qua-hong-2-178x140.jpg', fav: false, quantity: 3},
  {id: 22, name: 'June Plum', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: 'https://annam-gourmet.com/wp-content/uploads/2021/07/item_F159839.jpg', fav: false, quantity: 3}
  ]);
  const newProducts = [{id: 2, name: 'American seedless green grapes', origin: 'America', des: 'American seedless green grapes', price: '5', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false, quantity: 3},
  {id: 3, name: 'American seedless black grapes', origin: 'America', des: 'American seedless black grapes', price: '6', image: 'http://fruitshop.com.vn/image/cache/data/Grapel-178x140.jpg', fav: false, quantity: 3},
  {id: 4, name: 'merican seedless red grapes', origin: 'America', des: 'American seedless red grapes', price: '5', image: 'http://fruitshop.com.vn/image/cache/data/Grapes - red-178x140.JPG', fav: false, quantity: 3},
  {id: 5, name: 'American Ambrosia apple', origin: 'America', des: 'American Ambrosia apple size 48', price: '4.5', image: 'http://fruitshop.com.vn/image/cache/data/89683E82113A4626BA8569C232152225.ashx-178x140.jpg', fav: false, quantity: 3},
  {id: 6, name: 'Blueberry USA', origin: 'America', des: 'Blueberry USA - Blueberry USA', price: '20', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false, quantity: 3},
  {id: 7, name: 'American red cherry', origin: 'America', des: 'American red cherry', price: '10', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false, quantity: 3},
  {id: 8, name: 'American green apple', origin: 'America', des: 'American seedless green grapes', price: '3', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false, quantity: 3},
  {id: 9, name: 'Australian red cherry', origin: 'Australia', des: 'Australian red cherry', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false, quantity: 3}
  ];
  // fetch(`https://my.api.mockaroo.com/user.json?key=df825860`)
  // .then(res=>res.json())
  // .then(res=>console.log(res))
  
  // useEffect(() => {
  //   fetch(`https://reqres.in/api/products`).then(e => e.json())
  //   .then(
  //     e => {
  //       setProducts(e.data)
  //     }
  //   )
  // }, []);
  const handleAddProduct = (e, pr) => {
    e.preventDefault();
    const user = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : '';
    if(user) {
      dispatch(addToCart(pr));
    } else {
      history.push('/auth/login');
    }
  }
  const handleAddFav = (e, id) => {
    e.preventDefault();
    const newList = products.map(e => {
      if(e.id === id) {
        e.fav = !e.fav;
      }
      return e;
    })
    setProducts(newList);
    dispatch(addToFav(id));
  }
  return(
    <>
      <HeroBanner />
      <section className="section-content mt-24">
        <div className="container">
          <ul className="d-flex category-list">
            <li className="col-3">
              <img src={grape} alt="img-product"/>
              <p>America</p>
            </li>
            <li className="col-3">
              <img src={cherry} alt="img-product"/>
              <p>Australia</p>
            </li>
            <li className="col-3">
              <img src={durian} alt="img-product"/>
              <p>Asia</p>
            </li>
            <li className="col-3">
              <img src={fruit} alt="img-product"/>
              <p>Fruit tea</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section-product">
        <div className="container">
          <div className="wrap-title mt-40">
            <h2 className="fs-24">Best Sale</h2>
            <Link to="/products" className="link-style more">See more<i className="far fa-long-arrow-right"></i></Link>
          </div>
          <ul className="product-list">
            {
              products.map(e => (
                <li className="product-item col-3" key={e.id}>
                  <div className="product-wrap">
                    <button className={`btn ${e.fav? 'active': ''}`} onClick={(event)=>handleAddFav(event, e.id)}><i className="fas fa-heart"></i></button>
                    <Link to={`/product/${e.id}`} className="product-image">
                      <img src={e.image} alt="img-product"/>
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
        </div>
      </section>
      <section className="section-product">
        <div className="container">
          <div className="wrap-title mt-40">
            <h2 className="fs-24">Sales</h2>
            <Link to="/products" className="link-style more">See more<i className="far fa-long-arrow-right"></i></Link>
          </div>
          <ul className="product-list">
            {
              newProducts.map(e => (
                <li className="product-item col-3" key={e.id}>
                  <div className="product-wrap">
                    <Link to={`/product/${e.id}`} className="product-image">
                      <img src={e.image} alt="img-product"/>
                    <div className="product-card">
                      <h4 className="product-name">{e.name}</h4>
                      <p className="product-origin">{e.origin}</p>
                      <p className="product-price">${e.price}<span className="product-price-discount">$10</span></p>
                      <button onClick={(event)=>handleAddProduct(event, e)} className="btn btn-primary btn-add mt-24">Add to cart <i className="fas fa-cart-plus"></i></button>
                    </div>
                    </Link>
                  </div>
                </li>
                )
              )
            }
          </ul>
        </div>
      </section>
    </>
  );
}
export default Home;
