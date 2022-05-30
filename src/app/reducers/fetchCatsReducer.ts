import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api_key } from "../../config/api_key";

type Cat = {
    id: string;
    url: string | undefined;
    liked: boolean;
};

type CatsState = {
    loading: boolean;
    loadingMore: boolean;
    cats: Cat[];
    favorites: Cat[];
};

export const fetchCats = createAsyncThunk<Cat[], void>(
    "cats/fetchCats",
    async () => {
        const response = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,pn&api_key=${api_key}`
        );
        return (await response.json()) as Cat[];
    }
);

export const loadMore = createAsyncThunk<Cat[], number>(
    "cats/loadMore",
    async (page) => {
        const response = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=5&page=${page}&mime_types=jpg,pn&api_key=${api_key}`
        );
        return (await response.json()) as Cat[];
    }
);

const initialState: CatsState = {
    loading: false,
    loadingMore: false,
    cats: [],
    favorites: [],
};

const catsSlice = createSlice({
    name: "cats",
    initialState,
    reducers: {
        addToFavorite(state, action: PayloadAction<string>) {
            const cat = state.cats.find((cat) => cat.id === action.payload);
            if (cat === undefined) return;
            if (state.favorites.some((item) => item.id === cat.id)) {
                return;
            }
            cat.liked = true;
            state.favorites.push(cat);
        },
        removeFromFavorite(state, action: PayloadAction<string>) {
            const cat = state.cats.find((cat) => cat.id === action.payload);
            if (cat === undefined) return;
            cat.liked = false;
            state.favorites = state.favorites.filter(
                (cat) => cat.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCats.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                fetchCats.fulfilled,
                (state, action: PayloadAction<Cat[]>) => {
                    state.cats = action.payload;
                    state.cats = state.cats.map((cat) => {
                        cat.liked = false;
                        return cat;
                    });
                    state.loading = false;
                }
            )
            .addCase(loadMore.pending, (state) => {
                state.loadingMore = true;
            })
            .addCase(
                loadMore.fulfilled,
                (state, action: PayloadAction<Cat[]>) => {
                    action.payload = action.payload.map((cat) => {
                        cat.liked = false;
                        return cat;
                    });
                    state.cats = state.cats.concat(action.payload);
                    state.loadingMore = false;
                }
            );
    },
});

export const { addToFavorite, removeFromFavorite } = catsSlice.actions;

export default catsSlice.reducer;
