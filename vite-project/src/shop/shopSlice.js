import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  shop: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchGoods = createAsyncThunk("shop/fetchGoods", () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);
});

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.loading = false;
      state.shop = action.payload;
      state.error = "";
    });
    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.loading = false;
      state.shop = [];
      state.error = action.error.message;
    });
  },
});

export default shopSlice.reducer;
