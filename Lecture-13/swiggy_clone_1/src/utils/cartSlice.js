import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {
      state.items.push(action.payload) 
    },
    removeItem: (state,action) => {
      state.items.pop(); 
    },
    clearCart: (state, action) => {
      state.items.length=0
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer