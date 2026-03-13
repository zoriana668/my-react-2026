import PaginationComponent from "../components/pagination/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";

const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};

export default PaginationLayout;