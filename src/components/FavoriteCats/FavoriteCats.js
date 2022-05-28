import CatCard from "../CatCard/CatCard";
import CardsContainer from "../../containers/CardsContainer/CardsContainer";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorite } from "../../store/reducers/fetchCatsReducer";

const FavoriteCats = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.cats);

    return (
        <CardsContainer>
            {favorites.map((item) => {
                return (
                    <CatCard
                        key={item.id}
                        id={item.id}
                        url={item.url}
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
