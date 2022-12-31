import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  loading: false,
};

export const Reducers = createReducer(initialState, {
  setUser: (state, action) => {
    state.user = action.payload;
  },
  removeUser: (state, action) => {
    state.user = null;
  },
  setLoading: (state, action) => {
    state.loading = action.payload;
  }
})