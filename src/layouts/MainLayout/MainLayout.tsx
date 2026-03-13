

import './MainLayout.css';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="main-layout-wrapper">
            <div className="main-layout-block">

                MainLayout
                <Outlet/>

            </div>
        </div>
    );
};

export default MainLayout;