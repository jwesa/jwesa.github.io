import "./AppWrapper.scss";
import Header from "../../components/Header/Header";
import MainContent from "../MainContent/MainContent";

import { Outlet } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { useAppSelector } from "../../hook";

const AppWrapper: React.FC = () => {
    const { loading } = useAppSelector((state) => state.cats);

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
