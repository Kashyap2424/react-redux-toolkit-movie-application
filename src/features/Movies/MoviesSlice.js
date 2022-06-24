import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../../common/Api/movieAPI";
import { API_KEY } from "../../common/Api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchQuerys) => {
    const response = await movieApi
      .get(`?s=${searchQuerys}&type=movie&apikey=${API_KEY}`)
      .catch((error) => {
        console.log("Error :", error);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchQuerys) => {
    const response = await movieApi
      .get(`?s=${searchQuerys}&type=series&apikey=${API_KEY}`)
      .catch((error) => {
        console.log("Error :", error);
      });
    return response.data;
  }
);

export const fetchAsyncMovieOrDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrDetail",
  async (id) => {
    console.log(id);
    const response = await movieApi
      .get(`?apikey=${API_KEY}&i=${id.imdbId}&Plot=full`)
      .catch((error) => {
        console.log("Error :", error);
      });
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShowDetail: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelecedMovieOrShow: (state) => {
      state.selectedMovieOrShowDetail = {};
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
    [fetchAsyncMovieOrDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succssefully: ");

      return { ...state, selectedMovieOrShowDetail: payload };
    },
  },
});

export const { addMovies, removeSelecedMovieOrShow } = moviesSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShowDetail = (state) =>
  state.movies.selectedMovieOrShowDetail;

export default moviesSlice.reducer;
