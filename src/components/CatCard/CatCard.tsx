// const heart = require("../../assets/heart.svg") as string;
// const hoveredHeart = require("../../assets/hoveredHeart.svg") as string;
// const clickedHeart = require("../../assets/clickedHeart.svg") as string;
import "./CatCard.scss";

import { SetStateAction, useState } from "react";

import heart from "../../assets/heart.svg";
import hoveredHeart from "../../assets/hoveredHeart.svg";
import clickedHeart from "../../assets/clickedHeart.svg";

interface CatCardProps {
    url: string | undefined;
    liked: boolean;
    onClick: () => void;
}

const CatCard: React.FC<CatCardProps> = ({ url, liked, onClick }) => {
    const [like, setLike] = useState(liked ? clickedHeart : heart);

    const handleHover = (heart: SetStateAction<string>) => {
        if (like !== clickedHeart) {
            setLike(heart);
        }
    };

    return (
        <div className="cat-card">
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
