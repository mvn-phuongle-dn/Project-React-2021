import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{id: 1, name: 'American Navel yellow flesh orange', origin: 'America', quantity: 3, des: 'American Navel yellow flesh orange', price: 0.5, image: 'http://fruitshop.com.vn/image/cache/data/Sunkist Cara Cara Oranges-178x140.jpg'},
  {id: 2, name: 'American seedless green grapes', origin: 'America', quantity: 3, des: 'American seedless green grapes', price: 5, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 3, name: 'American seedless black grapes', origin: 'America', quantity: 3, des: 'American seedless black grapes', price: 6, image: 'http://fruitshop.com.vn/image/cache/data/Grapel-178x140.jpg'},
  {id: 4, name: 'merican seedless red grapes', origin: 'America', quantity: 3, des: 'American seedless red grapes', price: 5, image: 'http://fruitshop.com.vn/image/cache/data/Grapes - red-178x140.JPG'},
  {id: 5, name: 'American Ambrosia apple', origin: 'America', quantity: 3, des: 'American Ambrosia apple size 48', price: 4.5, image: 'http://fruitshop.com.vn/image/cache/data/89683E82113A4626BA8569C232152225.ashx-178x140.jpg'},
  {id: 6, name: 'Blueberry USA', origin: 'America', quantity: 3, des: 'Blueberry USA - Blueberry USA', price: 20, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 7, name: 'American red cherry', origin: 'America', quantity: 3, des: 'American red cherry', price: 10, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 8, name: 'American green apple', origin: 'America', quantity: 3, des: 'American seedless green grapes', price: 3, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 9, name: 'Australian red cherry', origin: 'Australia', quantity: 3, des: 'Australian red cherry', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 10, name: 'Australian Sugar Plums', origin: 'Australia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 11, name: 'Australian whole-branch raisins', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 12, name: 'Australian Spring Peach', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 13, name: 'Australian seedless green grapes', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 14, name: 'Australian yellow flesh oranges', origin: 'Australian', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 15, name: 'Korean yellow melon', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 16, name: 'Korean fresh crispy persimmon', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 17, name: 'Dragonfruit', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 18, name: 'Longan Box', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 19, name: 'Jackfruit', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 20, name: 'Mangosteen', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 21, name: 'Pineapple', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 22, name: 'June Plum', origin: 'Asia', quantity: 3, des: 'American seedless green grapes', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 23, name: 'MANGO GREEN TEA', origin: 'Drink', quantity: 3, des: 'Tropical fresh mango, mango juice with green tea.', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 24, name: 'BUBBLE GAGA', origin: 'Drink', quantity: 3, des: 'Passion fruit green tea with tapioca and coconut jelly.', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
  {id: 25, name: 'PASSIONFRUIT BLACK TEA', origin: 'Drink', quantity: 3, des: 'Made with passion fruit juice, adds a tartness to a bold earthy black tea. ', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
  {id: 26, name: 'PASSIONFRUIT GREEN TEA', origin: 'Drink', quantity: 3, des: 'Made with passion fruit juice, makes for a refreshing combination.', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
  {id: 27, name: 'LEMON GREEN TEA', origin: 'Drink', quantity: 3, des: 'Lemon juice infused green tea.', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
  {id: 28, name: 'LEMON WINTER MELON TEA', origin: 'Drink', quantity: 3, des: 'Traditional Asian tea made with a wax gourd with a hint of lemon.', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
  {id: 29, name: 'GRAPEFRUIT GREEN TEA', origin: 'Drink', quantity: 3, des: 'Freshly squeezed grapefruit juice mixed with a light green tea.', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},    
  {id: 30, name: 'LEMON ALOE VERA', origin: 'Drink', quantity: 3, des: 'Black tea, aloe vera, lemon and honey. ', price: 1, image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'}    
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
