import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useBeautyShop from "../../services/useBeautyShop";

const initialState = {
  services: [],
  servicesLoading: "idle",
};

export const getPrices = createAsyncThunk("services/getPrices", async () => {
  const { getFullPricesData } = useBeautyShop();
  return await getFullPricesData();
});

const servicesSlice = createSlice({
  name: "services",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPrices.pending, (state) => {
        state.servicesLoading = "loading";
      })
      .addCase(getPrices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.servicesLoading = "idle";
      })
      .addCase(getPrices.rejected, (state) => {
        state.servicesLoading = "error";
      });
  },
});

const { reducer } = servicesSlice;
export default reducer;
