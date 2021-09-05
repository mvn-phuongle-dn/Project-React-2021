import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginStatusSlice';
import cartReducer from './cartSlice';
import favReducer from './favSlice';
import userReducer from './loginStatusSlice';
import usersReducer from './usersSlice';
import productsReducer from './productsSlice';
import historyReducer from './historySlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    fav: favReducer,
    user: userReducer,
    users: usersReducer,
    products: productsReducer,
    history: historyReducer
  },
})
