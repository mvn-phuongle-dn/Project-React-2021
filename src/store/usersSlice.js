import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{id: 0, email: 'abc123@gmail.com', password: 'abc123', phone: '0905191293', username: 'John', address: '101 Pasteur, Da Nang'}, 
  {id: 1, email: 'a12345@gmail.com', password: 'a12345', phone: '0909321123', username: 'Son', address: '200 Pasteur, Da Nang'},
  {id: 2, email: 'phuongle@gmail.com', password: 'phuongle', phone: '0909090909', username: 'Phuong Le', address: '199 Pasteur, Da Nang'}]
}
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signup: (state, value) => {
      state.value.push(Object.assign({ id: state.value[state.value.length-1].id+1}, value.payload));
    }
  },
})

// Action creators are generated for each case reducer function
export const { signup } = usersSlice.actions

export default usersSlice.reducer
