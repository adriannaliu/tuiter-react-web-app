import { createSlice } from "@reduxjs/toolkit";
import home from './home.json';

const homeSlice = createSlice({
  name: 'home',
  initialState: home
});

export default homeSlice.reducer;