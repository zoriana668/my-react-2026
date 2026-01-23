import type {IPosts} from "../models/IPosts.ts";
import type {PostResponseDummyjson} from "../models/PostResponseDummyjson.ts";

const postAPI = import.meta.env.VITE_API_POSTS;


const getPosts = async (): Promise<IPosts[]> => {
    const response: PostResponseDummyjson = await fetch(postAPI)
        .then(value => value.json())
    return response.posts;
}

export {
    getPosts
}