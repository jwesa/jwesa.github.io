import "./AllCats.scss";
import CatCard from "../CatCard/CatCard";
import { useSelector } from "react-redux";

const AllCats = () => {
    const { cats } = useSelector((state) => state.cats);
    return (
        <div className="cards__container">
            {cats.map((cat) => {
                return <CatCard key={cat.id} url={cat.url} />;
            })}
        </div>
    );
};

export default AllCats;
