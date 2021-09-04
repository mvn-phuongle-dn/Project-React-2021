import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{id: 1, name: 'American Navel yellow flesh orange', origin: 'America', quantity: 3, des: 'American Navel yellow flesh orange', price: 0.5, image: require('../assets/images/orange-usa.png').default},
  {id: 2, name: 'American seedless green grapes', origin: 'America', quantity: 3, des: 'American seedless green grapes', price: 5, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 3, name: 'American seedless black grapes', origin: 'America', quantity: 3, des: 'American seedless black grapes', price: 6, image: require('../assets/images/black-grapes.jpg').default},
  {id: 4, name: 'merican seedless red grapes', origin: 'America', quantity: 3, des: 'American seedless red grapes', price: 5, image: require('../assets/images/nho-do.jpeg').default},
  {id: 5, name: 'American Ambrosia apple', origin: 'America', quantity: 3, des: 'American Ambrosia apple size 48', price: 4.5, image: require('../assets/images/apple-do.png').default},
  {id: 6, name: 'Blueberry USA', origin: 'America', quantity: 3, des: 'Blueberry USA - Blueberry USA', price: 20, image: require('../assets/images/blue-br.png').default},
  {id: 7, name: 'American red cherry', origin: 'America', quantity: 3, des: 'American red cherry', price: 10, image: require('../assets/images/red-cherry.jpg').default},
  {id: 8, name: 'American green apple', origin: 'America', quantity: 3, des: 'American seedless green grapes', price: 3, image: require('../assets/images/green-apples.jpeg').default},
  {id: 9, name: 'Australian red cherry', origin: 'Australia', quantity: 3, des: 'Australian red cherry', price: 1, image: require('../assets/images/red-cherry.jpeg').default},
  {id: 10, name: 'Australian Sugar Plums', origin: 'Australia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/sugar-plums.jpg').default},
  {id: 11, name: 'Australian Spring Peach', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/peach.jpg').default},
  {id: 12, name: 'Australian whole-branch raisins', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 13, name: 'Australian seedless green grapes', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 14, name: 'Australian yellow flesh oranges', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 15, name: 'Korean yellow melon', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/melon.jpg').default},
  {id: 16, name: 'Korean fresh crispy persimmon', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/persimmon.jpg').default},
  {id: 17, name: 'Dragonfruit', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 18, name: 'Longan Box', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 19, name: 'Jackfruit', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 20, name: 'Mangosteen', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 21, name: 'Pineapple', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 22, name: 'June Plum', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: require('../assets/images/plum.png').default},
  {id: 23, name: 'MANGO GREEN TEA', origin: 'Drink', quantity: 3, des: 'Tropical fresh mango, mango juice with green tea.', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 24, name: 'BUBBLE GAGA', origin: 'Drink', quantity: 3, des: 'Passion fruit green tea with tapioca and coconut jelly.', price: 1, image: require('../assets/images/nho-xanh.jpg').default},
  {id: 25, name: 'PASSIONFRUIT BLACK TEA', origin: 'Drink', quantity: 3, des: 'Made with passion fruit juice, adds a tartness to a bold earthy black tea. ', price: 1, image: require('../assets/images/nho-xanh.jpg').default},  
  {id: 26, name: 'PASSIONFRUIT GREEN TEA', origin: 'Drink', quantity: 3, des: 'Made with passion fruit juice, makes for a refreshing combination.', price: 1, image: require('../assets/images/nho-xanh.jpg').default},  
  {id: 27, name: 'LEMON GREEN TEA', origin: 'Drink', quantity: 3, des: 'Lemon juice infused green tea.', price: 1, image: require('../assets/images/nho-xanh.jpg').default},  
  {id: 28, name: 'LEMON WINTER MELON TEA', origin: 'Drink', quantity: 3, des: 'Traditional Asian tea made with a wax gourd with a hint of lemon.', price: 1, image: require('../assets/images/nho-xanh.jpg').default},  
  {id: 29, name: 'GRAPEFRUIT GREEN TEA', origin: 'Drink', quantity: 3, des: 'Freshly squeezed grapefruit juice mixed with a light green tea.', price: 1, image: require('../assets/images/nho-xanh.jpg').default},    
  {id: 30, name: 'LEMON ALOE VERA', origin: 'Drink', quantity: 3, des: 'Black tea, aloe vera, lemon and honey. ', price: 1, image: require('../assets/images/nho-xanh.jpg').default}    
  ]
}
localStorage.setItem('products', JSON.stringify(initialState.value));

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
// export const { } = productsSlice.actions

export default productsSlice.reducer
