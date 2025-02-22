import { configureStore } from "@reduxjs/toolkit";
import portfolio from "../reduxSlices/portfolioSlice/portfolioSlice";

const store = configureStore({
  reducer: { portfolio },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
