import React, {Suspense, lazy} from 'react';
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import('./Home'));
const Products = lazy(() => import('./Products'));
const ProductDetail = lazy(() => import('./ProductDetail'));
const AboutUs = lazy(() => import('./AboutUs'));

const Features = () => {
  return(
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route path="/about-us">
          <AboutUs/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
    </>
  );
}
export default Features;
