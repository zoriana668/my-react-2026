import {useEffect, useState} from "react";
import {getPosts} from "../../service/api.service.ts";
import type {IPost} from "../../models/IPost.ts";

const PostsComponent = () => {

    const [postsArray, setPost] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts()
            .then(response => {
                setPost(response)
            });

    }, []);


    return (
        <div>
            postsArray.map(item )
        </div>
    );
};

export default PostsComponent;