import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [] 
}
export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, value) => {
      const idx = state.value.indexOf(value.payload);
      if(idx !== -1) {
        state.value.splice(idx, 1);
      } else {
        state.value.push(value.payload);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToFav } = favSlice.actions

export default favSlice.reducer
