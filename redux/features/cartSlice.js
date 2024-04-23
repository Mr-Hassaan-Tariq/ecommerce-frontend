// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const isServer = typeof window === "undefined";

const loadCartFromStorage = () => {
  if (isServer) {
    return [];
  }

  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToStorage = (cart) => {
  if (!isServer) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    add(state, action) {
      state.push(action.payload);
      saveCartToStorage(state);
    },
    update(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        saveCartToStorage(state);
      }
    },
    remove(state, action) {
      const itemIdToRemove = action.payload;
      const newState = state.filter((item) => item.id !== itemIdToRemove);
      saveCartToStorage(newState);
      return newState;
    },
  },
});

export const { add, update, remove } = cartSlice.actions;
export default cartSlice.reducer;
