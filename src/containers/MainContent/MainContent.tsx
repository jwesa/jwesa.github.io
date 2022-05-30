import "./MainContent.scss";
import { Outlet } from "react-router-dom";

interface MainContentProps {
    children: React.ReactElement;
}

const MainContent: React.FC<MainContentProps> = () => {
    return (
        <div className="main-content">
            <Outlet />
        </div>
    );
};

export default MainContent;
