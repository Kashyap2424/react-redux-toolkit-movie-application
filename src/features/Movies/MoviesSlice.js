import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/Api/movieAPI";
import { API_KEY } from "../../common/Api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const response = await movieApi
      .get(`?s=${movieText}&type=movie&apikey=${API_KEY}`)
      .catch((error) => {
        console.log("Error :", error);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";

    const response = await movieApi
      .get(`?s=${seriesText}&type=series&apikey=${API_KEY}`)
      .catch((error) => {
        console.log("Error :", error);
      });
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies(state, { payload }) {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succssefully: ");

      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Fetched Error!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succssefully: ");

      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = moviesSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export default moviesSlice.reducer;
