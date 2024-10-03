import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";

const store = configureStore({
  reducer: {
    product: userReducer,
  },
});

export default store;
