import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import coursesSlice from "./coursesSlice";
import loadingSlice from "./loadingSlice";
const store = configureStore({
  reducer: {
    home: homeSlice,
    courses: coursesSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
