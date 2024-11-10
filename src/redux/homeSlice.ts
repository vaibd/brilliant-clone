import { createSlice } from "@reduxjs/toolkit";
import { courseRecommendedData } from "../constants/home";
import { RootState } from "./store";

const initialState = {
  recommendedCourses: courseRecommendedData,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
export const useRecommendedCourses = (state: RootState) =>
  state.home.recommendedCourses;
