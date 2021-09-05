import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [] 
}
export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, value) => {
      var today = new Date();
      var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      state.value.push({detail: value.payload, date: date + ' ' + time});
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToHistory } = historySlice.actions

export default historySlice.reducer
