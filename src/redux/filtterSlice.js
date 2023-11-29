import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  country: "",
  category: "",
  minPrice: "",
  maxPrice: "",
  clickButton: 0,
};
const FiltterSlice = createSlice({
  name: "filtter",
  initialState,
  reducers: {
    getCountry: (state, action) => {
      state.country = `country=${action.payload}`;
    },
    getCategory: (state, action) => {
      state.category = `category=${action.payload}`;
    },
    getMinPrice: (state, action) => {
      state.minPrice = `minPrice=${action.payload}`;
    },
    getMaxPrice: (state, action) => {
      state.maxPrice = `maxPrice=${action.payload}`;
    },
    theClickButton: (state, action) => {
      state.clickButton += action.payload;
    },
  },
});
export const {
  getCountry,
  getCategory,
  getMinPrice,
  getMaxPrice,
  theClickButton,
} = FiltterSlice.actions;
export default FiltterSlice.reducer;
