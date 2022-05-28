import "./CatCard.scss";
import heart from "../../assets/heart.svg";

const CatCard = ({ id, url }) => {
    return (
        <div className="cat-card">
            <img className="cat-card__image" src={url} alt="Cat img" />
            <img className="cat-card__like-button" src={heart} alt="heart" />
        </div>
    );
};

export default CatCard;
