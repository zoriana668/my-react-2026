import {useEffect, useState} from "react";
import type {IPosts} from "../../models/IPosts.ts";
import {getRecipe} from "../../service/api.service.ts";
import PostComponent from "../Post-Component/Post-Component.tsx";

const PostsComponent = () => {
    const [postsArray, setPost] = useState<IPosts[]>([])
    useEffect(() => {
        getPosts()
            .then(result => {
                setPost(result);
            })
    }, []);


    return (
        <div>
            {
                postsArray.map((recipe) => (<PostComponent key={recipe.id} item={recipe}/>))
            }
        </div>
    );
};

export default PostsComponent;