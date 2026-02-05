import {useParams} from "react-router-dom";

const PostsPage = () => {
    const {userId} = useParams();
    console.log(userId);

    return (
        <div>
            PostsPage content
        </div>
    );
};

export default PostsPage;