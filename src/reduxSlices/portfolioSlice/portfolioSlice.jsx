import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useBeautyShop from "../../services/useBeautyShop";

const initialState = {
  portfolioData: [],
  portfolioUpload: "idle",
};

export const fetchPortfolioData = createAsyncThunk(
  "portfolio/fetchPortfolioData",
  async () => {
    const { getFullPortfolioData } = useBeautyShop();
    return await getFullPortfolioData();
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.portfolioUpload = "loading";
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.portfolioData = action.payload;
        state.portfolioUpload = "idle";
      })
      .addCase(fetchPortfolioData.rejected, (state) => {
        state.portfolioUpload = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { reducer } = portfolioSlice;

export default reducer;
