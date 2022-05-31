import AppWrapper from "./containers/AppWrapper/AppWrapper";
import AllCats from "./pages/AllCats/AllCats";
import FavoriteCats from "./pages/FavoriteCats/FavoriteCats";

import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./hook";
import { useEffect, useState } from "react";
import { fetchCats, loadMore } from "./app/reducers/fetchCatsReducer";

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	
    const [page, setPage] = useState<number>(0);
    const [fetching, setFetching] = useState<boolean>(true);

    const scrollHandler = () => {
        if (
            document.documentElement.scrollHeight -
                (document.documentElement.scrollTop + window.innerHeight) <
            80
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
            setFetching(false);
            dispatch(loadMore(page));
            setTimeout(() => {}, 1500);
        }
    }, [dispatch, fetching, page]);

    return (
        <Routes>
            <Route path="/uchiru-test" element={<AppWrapper />}>
                <Route index element={<AllCats />} />
                <Route path="/uchiru-test/" element={<AllCats />} />
                <Route
                    path="/uchiru-test/favorites"
                    element={<FavoriteCats />}
                />
            </Route>
        </Routes>
    );
};

export default App;
