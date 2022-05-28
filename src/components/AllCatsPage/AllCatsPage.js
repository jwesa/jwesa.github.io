import "./AllCatsPage.scss";
import { useSelector } from "react-redux";

const AllCatsPage = () => {
    const { loading } = useSelector((state) => state.cats);
    return <div>AllCatsPage</div>;
};

export default AllCatsPage;
