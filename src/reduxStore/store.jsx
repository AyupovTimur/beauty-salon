import { configureStore } from "@reduxjs/toolkit";
import portfolio from "../reduxSlices/portfolioSlice/portfolioSlice";
import portfolioFilter from "../reduxSlices/filterSlice/portfolioFilterSlice";
import services from "../reduxSlices/servicesSlice/servicesSlice";

const store = configureStore({
  reducer: { portfolio, portfolioFilter, services },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
