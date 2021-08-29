import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeLoginStatus: (state, value) => {
      state.value = value.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeLoginStatus } = loginSlice.actions

export default loginSlice.reducer
