import Header from './components/Header';
import Footer from './components/Footer';
import Features from './pages/Features';
import Cart from './pages/Features/Cart';
import Auth from './pages/Auth';
import Account from './pages/Account';
import PrivateRoute from './core/guards/PrivateRoute';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Switch>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <PrivateRoute path="/cart">
            <Cart />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
