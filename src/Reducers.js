import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  totalPrice: 0
};

export const Reducers = createReducer(initialState, {
  setUser: (state, action) => {
    state.user = action.payload;
  },
  removeUser: (state, action) => {
    state.user = null;
  },
  setTotalPrice: (state, action) => {
    state.totalPrice += action.payload;
  }
})