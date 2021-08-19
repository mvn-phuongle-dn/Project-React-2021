import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, value) => {
      const idx = state.value.map(e => e.id).indexOf(value.payload);
      if(idx !== -1) {
        state.value[idx].amount += 1;
      } else {
        state.value.push({id: value.payload, amount: 1});
      }
      localStorage.setItem('cart', JSON.stringify(state.value));
    },
    increaseQuantity: (state, value) => {
      const idx = state.value.map(e => e.id).indexOf(value.payload);
      state.value[idx].amount += 1;
      localStorage.setItem('cart', JSON.stringify(state.value));
    },
    decreaseQuantity: (state, value) => {
      const idx = state.value.map(e => e.id).indexOf(value.payload);
      state.value[idx].amount -= 1;
      localStorage.setItem('cart', JSON.stringify(state.value));
    },
    deleteProduct: (state, value) => {
      const idx = state.value.map(e => e.id).indexOf(value.payload);
      state.value.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(state.value));
    },
    deleteAll: (state, value) => {
      state.value = state.value.filter(e => e.id === -1);
      localStorage.setItem('cart', JSON.stringify(state.value.filter(e => e.id === -1)));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct, deleteAll } = cartSlice.actions

export default cartSlice.reducer
