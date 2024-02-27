"use client";

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/userSlice.js";

export const store = configureStore({
  reducer: {
    product: userSlice,
  },
});
