import CommentsComponent from "../../components/comments/CommentsComponent.tsx";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <CommentsComponent/>

            <Outlet/>
        </div>
    );
};

export default CommentsPage;