import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{id: 1, name: 'American Navel yellow flesh orange', origin: 'America', des: 'American Navel yellow flesh orange', price: '0.5', image: require('../assets/images/orange-usa.png').default, fav: false, quantity: 3},
  {id: 4, name: 'American seedless red grapes', origin: 'America', des: 'American seedless red grapes', price: '5', image: require('../assets/images/nho-do.jpeg').default, fav: false, quantity: 3},
  {id: 6, name: 'Blueberry USA', origin: 'America', des: 'Blueberry USA - Blueberry USA', price: '20', image: require('../assets/images/blue-br.png').default, fav: false, quantity: 3},
  {id: 10, name: 'Australian Sugar Plums', origin: 'Australia', des: 'American seedless green grapes', price: '1', image: require('../assets/images/sugar-plums.jpg').default, fav: false, quantity: 3},
  {id: 11, name: 'Australian Spring Peach', origin: 'Australian', des: 'American seedless green grapes', price: '1', image: require('../assets/images/peach.jpg').default, fav: false, quantity: 3},
  {id: 15, name: 'Korean yellow melon', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: require('../assets/images/melon.jpg').default, fav: false, quantity: 3},
  {id: 16, name: 'Korean fresh crispy persimmon', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: require('../assets/images/persimmon.jpg').default, fav: false, quantity: 3},
  {id: 22, name: 'June Plum', origin: 'Asia', des: 'American seedless green grapes', price: '1', image: require('../assets/images/plum.png').default, fav: false, quantity: 3}
  ] 
}
export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state, value) => {
      const idx = state.value.map(e => e.id).indexOf(value.payload);
      state.value[idx].fav = !state.value[idx].fav;
      // const idx = state.value.indexOf(value.payload);
      // if(idx !== -1) {
      //   state.value.splice(idx, 1);
      // } else {
      //   state.value.push(value.payload);
      // }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToFav } = favSlice.actions

export default favSlice.reducer
