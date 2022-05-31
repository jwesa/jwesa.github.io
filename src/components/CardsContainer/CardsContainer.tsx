import "./CardsContainer.scss";

interface CardsContainerProps {
    children: React.ReactElement[];
}

const CardsContainer: React.FC<CardsContainerProps> = ({ children }) => {
    return <div className="cards__container">{children}</div>;
};

export default CardsContainer;
