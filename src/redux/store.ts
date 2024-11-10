import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home";
import coursesReducer from "./courses";

const store = configureStore({
  reducer: {
    home: homeReducer,
    courses: coursesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store