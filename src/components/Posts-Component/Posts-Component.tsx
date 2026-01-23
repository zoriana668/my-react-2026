import {useEffect, useState} from "react";
import type {IPosts} from "../../models/IPosts.ts";
import PostComponent from "../Post-Component/Post-Component.tsx";
import {getPosts} from "../../service/api.service.ts";

const PostsComponent = () => {
    const [postsArray, setPost] = useState<IPosts[]>([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setPost(allPosts)
        }

        fetchPosts()
    }, []);


    return (
        <div>
            {
                postsArray.map((post) => (<PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};

export default PostsComponent;