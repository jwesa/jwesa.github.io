import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api_key } from "../../config/api_key";

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,pn&api_key=${api_key}`
    );
    return await response.json();
});

export const loadMore = createAsyncThunk("cats/loadMore", async (page) => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&mime_types=jpg,pn&api_key=${api_key}`
    );
    return await response.json();
});

const catsSlice = createSlice({
    name: "cats",
    initialState: {
        loading: false,
        cats: [],
        newCats: [],
        favorites: [],
    },
    reducers: {
        addToFavorite(state, action) {
            const cat = state.cats.find((cat) => cat.id === action.payload);
            if (state.favorites.some((item) => item.id === cat.id)) {
                return;
            }
            cat.liked = true;
            state.favorites.push(cat);
        },
        removeFromFavorite(state, action) {
            const cat = state.cats.find((cat) => cat.id === action.payload);
            cat.liked = false;
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
            state.cats = state.cats.map((cat) => {
                cat.liked = false;
                return cat;
            });
            state.loading = false;
        },
        [loadMore.fulfilled]: (state, action) => {
            state.newCats = action.payload;
            state.newCats = state.newCats.map((cat) => {
                cat.liked = false;
                return cat;
            });
            console.log(state.newCats);
            state.cats = state.cats.concat(state.newCats);
        },
    },
});

export const { addToFavorite, removeFromFavorite } = catsSlice.actions;

export default catsSlice.reducer;
