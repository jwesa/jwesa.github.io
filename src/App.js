import AppWrapper from "./containers/AppWrapper/AppWrapper";
import AllCats from "./components/AllCats/AllCats";
import FavoriteCats from "./components/FavoriteCats/FavoriteCats";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCats, loadMore } from "./store/reducers/fetchCatsReducer";

function App() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [fetching, setFetching] = useState(true);

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
            120
        ) {
            setFetching(true);
            setPage(page + 1);
        }
    };

    useEffect(() => {
        dispatch(fetchCats());
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    });

    useEffect(() => {
        if (fetching) {
            //debouncer
            setTimeout(() => {
                dispatch(loadMore(page));
            }, 1000);
            setFetching(false);
        }
    }, [dispatch, fetching, page]);

    return (
        <Routes>
            <Route path="/uchiru-test" element={<AppWrapper />}>
                <Route index path="/uchiru-test/" element={<AllCats />} />
                <Route
                    path="/uchiru-test/favorites"
                    element={<FavoriteCats />}
                />
            </Route>
        </Routes>
    );
}

export default App;
