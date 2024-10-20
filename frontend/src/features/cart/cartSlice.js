import { createSlice } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';

const initialState = {
    cartlist:[]
}

const cartSlice = createSlice({
  name: 'cartlist',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size, price } = action.payload;

      const existingItem = state.cartlist.find(cart => cart.id === id && cart.size === size);

      if (existingItem) {
        enqueueSnackbar("Item alredy exists",{variant:'warning'})
      } else {
        const cart = { id, size, price };
        state.cartlist.push(cart);
        enqueueSnackbar("Added to cart", {variant:'success'})
      }
    },
    removeFromCart: (state, action) => {
        state.cartlist = state.cartlist.filter((cart)=>cart.id != action.payload)
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
