import {useEffect} from "react";
import {getPosts} from "../../service/api.service.ts";

const PostsComponent = () => {

    const [postsArray, setPost] = useEffect([]);

    useEffect(() => {
        getPosts()
            .then(response)
            setPost(response);
    }, []);


    return (
        <div>

        </div>
    );
};

export default PostsComponent;