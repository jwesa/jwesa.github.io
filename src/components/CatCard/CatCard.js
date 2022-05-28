import "./CatCard.scss";
import heart from "../../assets/heart.svg";
import hoveredHeart from "../../assets/hoveredHeart.svg";
import clickedHeart from "../../assets/clickedHeart.svg";

import { useState } from "react";

const CatCard = ({ id, url, onClick }) => {
    const [heartState, setHeartState] = useState(heart);

    return (
        <div className="cat-card" id={id}>
            <img className="cat-card__image" src={url} alt="Cat img" />
            <img
                src={heartState}
                alt="Heart img"
                className="cat-card__like-button"
                onClick={onClick}
                onMouseEnter={() => {
                    setHeartState(hoveredHeart);
                }}
                onMouseLeave={() => {
                    setHeartState(heart);
                }}
            />
        </div>
    );
};

export default CatCard;
