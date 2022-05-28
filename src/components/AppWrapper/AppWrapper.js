import "./AppWrapper.scss";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

const AppWrapper = () => {
    const { loading } = useSelector((state) => state.cats);

    return (
        <div className="app-wrapper">
            <Header />
            {loading ? (
                <div className="spinner__container">
                    <TailSpin color="#2196f3" width={120} height={120} />
                </div>
            ) : (
                <MainContent>
                    <Outlet />
                </MainContent>
            )}
        </div>
    );
};

export default AppWrapper;
