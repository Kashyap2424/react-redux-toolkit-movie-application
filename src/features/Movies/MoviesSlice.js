import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovis(state, { payload }) {
      state.movies = payload;
    },
  },
});

export const { addMovis } = moviesSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export default moviesSlice.reducer;
