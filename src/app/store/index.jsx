import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../../features/form";

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});
