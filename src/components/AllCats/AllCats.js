import CatCard from "../CatCard/CatCard";
import CardsContainer from "../../containers/CardsContainer/CardsContainer";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from "../../store/reducers/fetchCatsReducer";

const AllCats = () => {
    const dispatch = useDispatch();
    const { cats } = useSelector((state) => state.cats);

    return (
        <CardsContainer>
            {cats.map((cat) => {
                return (
                    <CatCard
                        key={cat.id}
                        id={cat.id}
						url={cat.url}
						liked={cat.liked}
                        onClick={() => {
                            dispatch(addToFavorite(cat.id));
                        }}
                    />
                );
            })}
        </CardsContainer>
    );
};

export default AllCats;
