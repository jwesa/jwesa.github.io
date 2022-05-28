import "./CatCard.scss";
import heart from "../../assets/heart.svg";

const CatCard = ({ id, url, onClick }) => {
    return (
        <div className="cat-card" id={id}>
            <img className="cat-card__image" src={url} alt="Cat img" />
            <img
                className="cat-card__like-button"
                src={heart}
                alt="Heart"
                onClick={onClick}
            />
        </div>
    );
};

export default CatCard;
