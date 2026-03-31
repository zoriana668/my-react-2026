import {Outlet} from "react-router-dom";
import Menu from "../components/Menu/Menu.tsx";

import './MainLayout.css';


const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;