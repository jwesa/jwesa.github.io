import { configureStore } from "@reduxjs/toolkit";
import fetchCatsReducer from "./reducers/fetchCatsReducer";

const store = configureStore({
    reducer: {
        cats: fetchCatsReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
