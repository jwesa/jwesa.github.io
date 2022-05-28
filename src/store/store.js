import { configureStore } from "@reduxjs/toolkit";
import fetchCatsReducer from "./reducers/fetchCatsReducer";

export default configureStore({
    reducer: {
        cats: fetchCatsReducer,
    },
});
