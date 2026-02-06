import PostComponent from "../../components/posts/PostComponent.tsx";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <PostComponent/>

            <Outlet/>
        </div>
    );
};

export default PostsPage;