import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../feature/shoppingSlice";

const store = configureStore({ reducer: shoppingReducer });
export default store;
