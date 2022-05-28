import AppWrapper from "./components/AppWrapper/AppWrapper";
import AllCats from "./components/AllCats/AllCats";
import FavoriteCats from "./components/FavoriteCats/FavoriteCats";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCats } from "./store/reducers/fetchCatsReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCats());
	}, [dispatch]);
	
    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index path="all" element={<AllCats />} />
                <Route path="favorites" element={<FavoriteCats />} />
            </Route>
        </Routes>
    );
}

export default App;
