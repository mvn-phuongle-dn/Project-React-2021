import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: [{id: 1, name: 'American Navel yellow flesh orange', origin: 'America', des: 'American Navel yellow flesh orange', price: '0.5$', image: 'http://fruitshop.com.vn/image/cache/data/Sunkist Cara Cara Oranges-178x140.jpg'},
//   {id: 2, name: 'American seedless green grapes', origin: 'America', des: 'American seedless green grapes', price: '5$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 3, name: 'American seedless black grapes', origin: 'America', des: 'American seedless black grapes', price: '6$', image: 'http://fruitshop.com.vn/image/cache/data/Grapel-178x140.jpg'},
//   {id: 4, name: 'merican seedless red grapes', origin: 'America', des: 'American seedless red grapes', price: '5$', image: 'http://fruitshop.com.vn/image/cache/data/Grapes - red-178x140.JPG'},
//   {id: 5, name: 'American Ambrosia apple', origin: 'America', des: 'American Ambrosia apple size 48', price: '4.5$', image: 'http://fruitshop.com.vn/image/cache/data/89683E82113A4626BA8569C232152225.ashx-178x140.jpg'},
//   {id: 6, name: 'Blueberry USA', origin: 'America', des: 'Blueberry USA - Blueberry USA', price: '20$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 7, name: 'American red cherry', origin: 'America', des: 'American red cherry', price: '10$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 8, name: 'American green apple', origin: 'America', des: 'American seedless green grapes', price: '3$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 9, name: 'Australian red cherry', origin: 'Australia', des: 'Australian red cherry', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 10, name: 'Australian Sugar Plums', origin: 'Australia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 11, name: 'Australian whole-branch raisins', origin: 'Australian', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 12, name: 'Australian Spring Peach', origin: 'Australian', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 13, name: 'Australian seedless green grapes', origin: 'Australian', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 14, name: 'Australian yellow flesh oranges', origin: 'Australian', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 15, name: 'Korean yellow melon', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 16, name: 'Korean fresh crispy persimmon', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 17, name: 'Dragonfruit', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 18, name: 'Longan Box', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 19, name: 'Jackfruit', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 20, name: 'Mangosteen', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 21, name: 'Pineapple', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 22, name: 'June Plum', origin: 'Asia', des: 'American seedless green grapes', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 23, name: 'MANGO GREEN TEA', origin: 'Drink', des: 'Tropical fresh mango, mango juice with green tea.', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 24, name: 'BUBBLE GAGA', origin: 'Drink', des: 'Passion fruit green tea with tapioca and coconut jelly.', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},
//   {id: 25, name: 'PASSIONFRUIT BLACK TEA', origin: 'Drink', des: 'Made with passion fruit juice, adds a tartness to a bold earthy black tea. ', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
//   {id: 26, name: 'PASSIONFRUIT GREEN TEA', origin: 'Drink', des: 'Made with passion fruit juice, makes for a refreshing combination.', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
//   {id: 27, name: 'LEMON GREEN TEA', origin: 'Drink', des: 'Lemon juice infused green tea.', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
//   {id: 28, name: 'LEMON WINTER MELON TEA', origin: 'Drink', des: 'Traditional Asian tea made with a wax gourd with a hint of lemon.', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},  
//   {id: 29, name: 'GRAPEFRUIT GREEN TEA', origin: 'Drink', des: 'Freshly squeezed grapefruit juice mixed with a light green tea.', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'},    
//   {id: 30, name: 'LEMON ALOE VERA', origin: 'Drink', des: 'Black tea, aloe vera, lemon and honey. ', price: '1$', image: 'http://fruitshop.com.vn/image/cache/data/nho-xanh-178x140.jpg'}    
//   ]
// }
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
