import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shoppingList",
  initialState: [],
  reducers: { loadingShopping: (action) => [...action.payload] },
});
export const { loadingShopping: loadingShoppingActionCreator } =
  shoppingSlice.actions;
export default shoppingSlice.reducer;
