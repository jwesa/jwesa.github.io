import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api_key } from "../../config/api_key";

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,pn&api_key=${api_key}`
    );
    const cats = await response.json();
    console.log(cats);
    return cats;
});

const catsReducer = createSlice({
    name: "cats",
    initialState: {
        loading: false,
        cats: [],
    },
    reducers: {},
    extraReducers: {
        [fetchCats.pending]: (state) => {
            state.loading = true;
        },
        [fetchCats.fulfilled]: (state, action) => {
            state.cats = action.payload;
            state.loading = false;
        },
    },
});

export default catsReducer.reducer;
