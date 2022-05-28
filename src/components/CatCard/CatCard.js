import "./CatCard.scss";

const CatCard = ({ id, url }) => {
    return (
        <div className="cat-card">
            <img src={url} alt="Cat img" />
            {/* <button className="cat-card__button">&hearts;</button> */}
        </div>
    );
};

export default CatCard;
