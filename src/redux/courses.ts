import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../constants/home";
import { RootState } from "./store";

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
export const useCourses = (state: RootState) => state.courses.courses;
