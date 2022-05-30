import "./AllCats.scss";
import CatCard from "../CatCard/CatCard";
import CardsContainer from "../../containers/CardsContainer/CardsContainer";
import { useAppSelector, useAppDispatch } from "../../hook";
import { addToFavorite } from "../../app/reducers/fetchCatsReducer";

const AllCats: React.FC = () => {
    const dispatch = useAppDispatch();
    const { cats, loadingMore } = useAppSelector((state) => state.cats);

    return (
        <>
            <CardsContainer>
                {cats.map((cat) => {
                    return (
                        <CatCard
                            key={cat.id}
                            url={cat.url}
                            liked={cat.liked}
                            onClick={() => {
                                dispatch(addToFavorite(cat.id));
                            }}
                        />
                    );
                })}
            </CardsContainer>
            {loadingMore && (
                <div className="loading__title">
                    ... загружаем еще котиков ...
                </div>
            )}
        </>
    );
};

export default AllCats;
