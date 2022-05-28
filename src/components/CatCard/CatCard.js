import "./CatCard.scss";
import heart from "../../assets/heart.svg";
import hoveredHeart from "../../assets/hoveredHeart.svg";
import clickedHeart from "../../assets/clickedHeart.svg";

// import {
//     hoverEnter,
//     hoverLeave,
//     setFavorite,
// } from "../../store/reducers/heartStateReducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const CatCard = ({ id, url, liked, onClick }) => {
    const [like, setLike] = useState(liked ? clickedHeart : heart);

    const handleHover = (heart) => {
        if (like !== clickedHeart) {
            setLike(heart);
        }
    };

    return (
        <div className="cat-card" id={id}>
            <img className="cat-card__image" src={url} alt="Cat img" />
            <img
                src={like}
                alt="Heart img"
                className="cat-card__like-button"
                onClick={() => {
                    onClick();
                    setLike(clickedHeart);
                }}
                onMouseEnter={() => {
                    handleHover(hoveredHeart);
                }}
                onMouseLeave={() => {
                    handleHover(heart);
                }}
            />
        </div>
    );
};

export default CatCard;
