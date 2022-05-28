import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api_key } from "../../config/api_key";

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,pn&api_key=${api_key}`
    );
    return await response.json();
});

const catsReducer = createSlice({
    name: "cats",
    initialState: {
        loading: false,
        cats: [],
        favorites: [],
    },
    reducers: {
        addToFavorite(state, action) {
            const cat = state.cats.find((cat) => cat.id === action.payload);
            state.favorites.push(cat);
        },
        removeFromFavorite(state, action) {
            state.favorites = state.favorites.filter(
                (cat) => cat.id !== action.payload
            );
        },
    },
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

export const { addToFavorite, removeFromFavorite } = catsReducer.actions;

export default catsReducer.reducer;
