import "./AppWrapper.scss";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";

const AppWrapper = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    );
};

export default AppWrapper;
