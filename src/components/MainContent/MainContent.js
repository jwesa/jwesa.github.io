import './MainContent.scss'
import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
        <div className="main-content">
            <Outlet />
        </div>
    );
};

export default MainContent;
