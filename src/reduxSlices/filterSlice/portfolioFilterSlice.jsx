import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFilter: "all",
};

const portfolioFilterSlice = createSlice({
  name: "portfolioFilter",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

const { actions, reducer } = portfolioFilterSlice;
export default reducer;
export const { setActiveFilter } = actions;
