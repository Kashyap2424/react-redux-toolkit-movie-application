import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./Movies/MoviesSlice";

export const reduxStore = configureStore({
  reducer: moviesReducer,
});
