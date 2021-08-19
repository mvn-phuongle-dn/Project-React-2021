import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './userSlice';
import cartReducer from './cartSlice';
import favReducer from './favSlice';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    fav: favReducer,
    products: productsReducer
  },
})
