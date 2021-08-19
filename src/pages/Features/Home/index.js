import React, { useState, useEffect } from 'react';
import HeroBanner from '../../../components/HeroBanner';
import product1 from '../../../assets/images/product1.jpg';
import grape from '../../../assets/images/grape.png';
import cherry from '../../../assets/images/cherry.jpg';
import durian from '../../../assets/images/durian.png';
import fruit from '../../../assets/images/fruit.png';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { addToFav } from '../../../store/favSlice';
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([{id: 1, name: 'American Navel yellow flesh orange', origin: 'America', des: 'American Navel yellow flesh orange', price: '0.5', image: 'http://fruitshop.com.vn/image/cache/data/Sunkist Cara Cara Oranges-178x140.jpg', fav: false},
  {id: 4, name: 'merican seedless red grapes', origin: 'America', des: 'American seedless red grapes', price: '5', image: 'http://fruitshop.com.vn/image/cache/data/Grapes - red-178x140.JPG', fav: false},
  {id: 6, name: 'Blueberry USA', origin: 'America', des: 'Blueberry USA - Blueberry USA', price: '20', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false},
  {id: 10, name: 'Australian Sugar Plums', origin: 'Australia', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/Man_duong_Uc-178x140.jpeg', fav: false},
  {id: 11, name: 'Australian Spring Peach', origin: 'Australian', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/1243536c-178x140.jpg', fav: false},
  {id: 15, name: 'Korean yellow melon', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/GF-1317052114-0953_m0-178x140.jpg', fav: false},
  {id: 16, name: 'Korean fresh crispy persimmon', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/qua-hong-2-178x140.jpg', fav: false},
  {id: 22, name: 'June Plum', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: 'https://annam-gourmet.com/wp-content/uploads/2021/07/item_F159839.jpg', fav: false}
  ]);
  const [newProducts, setNewProducts] = useState([{id: 2, name: 'American seedless green grapes', origin: 'America', des: 'American seedless green grapes', price: '5', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false},
  {id: 3, name: 'American seedless black grapes', origin: 'America', des: 'American seedless black grapes', price: '6', image: 'http://fruitshop.com.vn/image/cache/data/Grapel-178x140.jpg', fav: false},
  {id: 4, name: 'merican seedless red grapes', origin: 'America', des: 'American seedless red grapes', price: '5', image: 'http://fruitshop.com.vn/image/cache/data/Grapes - red-178x140.JPG', fav: false},
  {id: 5, name: 'American Ambrosia apple', origin: 'America', des: 'American Ambrosia apple size 48', price: '4.5', image: 'http://fruitshop.com.vn/image/cache/data/89683E82113A4626BA8569C232152225.ashx-178x140.jpg', fav: false},
  {id: 6, name: 'Blueberry USA', origin: 'America', des: 'Blueberry USA - Blueberry USA', price: '20', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false},
  {id: 7, name: 'American red cherry', origin: 'America', des: 'American red cherry', price: '10', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false},
  {id: 8, name: 'American green apple', origin: 'America', des: 'American seedless green grapes', price: '3', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false},
  {id: 9, name: 'Australian red cherry', origin: 'Australia', des: 'Australian red cherry', price: '1', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg', fav: false}
  ])
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
  const handleAddProduct = (e, id) => {
    e.preventDefault();
    dispatch(addToCart(id));
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
              <img src={grape}/>
              <p>America</p>
            </li>
            <li className="col-3">
              <img src={cherry}/>
              <p>Australia</p>
            </li>
            <li className="col-3">
              <img src={durian}/>
              <p>Asia</p>
            </li>
            <li className="col-3">
              <img src={fruit}/>
              <p>Fruit tea</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section-product">
        <div className="container">
          <h2 className="section-title">Best Sale</h2>
          <hr className="mt-5 mb-24"></hr>
          <ul className="product-list">
            {
              products.map(e => (
                <li className="product-item col-3" key={e.id}>
                  <div className="product-wrap">
                    <button className={`btn ${e.fav? 'active': ''}`} onClick={(event)=>handleAddFav(event, e.id)}><i className="fas fa-heart"></i></button>
                    <Link to={`/product/${e.id}`} className="product-image">
                      <img src={e.image}/>
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
        </div>
      </section>
      <section className="section-product">
        <div className="container">
          <h2 className="section-title">Sales</h2>
          <hr className="mt-5 mb-24"></hr>
          <ul className="product-list">
            {
              newProducts.map(e => (
                <li className="product-item col-3" key={e.id}>
                  <div className="product-wrap">
                    {/* <button className={`btn ${e.fav? 'active': ''}`} onClick={(event)=>handleAddFav(event, e.id)}><i className="fas fa-heart"></i></button> */}
                    <Link to={`/product/${e.id}`} className="product-image">
                      <img src={e.image}/>
                    </Link>
                    <div className="product-card">
                      <h4 className="product-name">{e.name}</h4>
                      <p className="product-origin">{e.origin}</p>
                      <p className="product-price">${e.price}<span className="product-price-discount">$10</span></p>
                      <button onClick={(event)=>handleAddProduct(event, e.id)} className="btn btn-primary btn-add mt-24">Add to cart <i className="fas fa-cart-plus"></i></button>
                    </div>
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
