import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  apple:100
};

export const Reducers = createReducer(initialState, {
  appApple: (state, action) => {
    state.apple = state.apple + action.payload;
  },
  eatApple: (state, action) => {
    state.apple = state.apple - action.payload;
  }
})