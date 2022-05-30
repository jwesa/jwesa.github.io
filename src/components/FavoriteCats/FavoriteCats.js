import CatCard from "../CatCard/CatCard";
import CardsContainer from "../../containers/CardsContainer/CardsContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeFromFavorite } from "../../store/reducers/fetchCatsReducer";

const FavoriteCats = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.cats);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <CardsContainer>
            {favorites.map((item) => {
                return (
                    <CatCard
                        key={item.id}
                        id={item.id}
                        url={item.url}
                        liked={item.liked}
                        onClick={() => {
                            dispatch(removeFromFavorite(item.id));
                        }}
                    />
                );
            })}
        </CardsContainer>
    );
};

export default FavoriteCats;
