import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitems: [],
    cartQuantity: [1],
  },
  reducers: {
    addToCart: (state, action) => {
      const isCart = state.cartitems.find(
        (cart) => cart.id === action.payload.id
      );
      if (isCart) {
        return state;
      }
      return {
        ...state,
        cartitems: [...state.cartitems, action.payload],
      };
    },
    removeToCart: (state, action) => {
      return {
        ...state,
        cartitems : state.cartitems.filter(cart=>cart.id !== action.payload.id)
        }
    },
    addQuantity: (state, action) => {
      return {
        ...state,
        cartQuantity: [...state.cartQuantity,action.payload],
      };
    },
    removeQuantity: (state, action) => {
      return {
        ...state,
        cartQuantity: [...state.cartQuantity,action.payload],
      };
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, addQuantity, removeQuantity, removeToCart } =
  cartSlice.actions;
// [...state.cartitems,action.payload]
// state.cartitems?.map(cart=>cart.id === action.payload.id ? [action.payload] : [action.payload])
