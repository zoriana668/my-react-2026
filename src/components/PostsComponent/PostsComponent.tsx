import {useEffect, useState} from "react";
import {getPosts} from "../../service/api.service.ts";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../Post-Component/PostComponent.tsx";

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
            postsArray.map(post => (<PostComponent key={post.id} item={post}/>))
        </div>
    );
};

export default PostsComponent;